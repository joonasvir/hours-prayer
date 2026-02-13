// Hours - Liturgical Prayer App

class HoursApp {
    constructor() {
        this.currentHour = null;
        this.synth = window.speechSynthesis;
        this.utterance = null;
        this.completions = this.loadCompletions();
        
        this.initializeApp();
    }

    loadCompletions() {
        const today = new Date().toDateString();
        const saved = localStorage.getItem('hoursCompletions');
        
        if (saved) {
            const data = JSON.parse(saved);
            // Reset if it's a new day
            if (data.date !== today) {
                return { date: today, completed: [] };
            }
            return data;
        }
        
        return { date: today, completed: [] };
    }

    saveCompletions() {
        localStorage.setItem('hoursCompletions', JSON.stringify(this.completions));
    }

    initializeApp() {
        this.setupEventListeners();
        this.displayCurrentPrayer();
        this.updateNextPrayer();
        this.updateStats();
        this.startAutoUpdate();
        this.registerServiceWorker();
    }

    setupEventListeners() {
        // Text-to-speech controls
        document.getElementById('speakBtn').addEventListener('click', () => {
            this.speakPrayer();
        });

        document.getElementById('stopBtn').addEventListener('click', () => {
            this.stopSpeaking();
        });

        // Completion checkbox
        document.getElementById('completionCheck').addEventListener('change', (e) => {
            this.handleCompletion(e.target.checked);
        });

        // Hour navigation
        document.querySelectorAll('.hour-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const hour = btn.dataset.hour;
                this.displayPrayer(hour);
            });
        });

        // Stop speech when user leaves
        document.addEventListener('visibilitychange', () => {
            if (document.hidden && this.synth.speaking) {
                this.stopSpeaking();
            }
        });
    }

    getCurrentHour() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        let currentHourId = 'lauds';
        
        for (let i = 0; i < HOURS_SCHEDULE.length; i++) {
            const hour = HOURS_SCHEDULE[i];
            const hourMinutes = hour.hour * 60 + hour.minute;
            
            if (currentMinutes >= hourMinutes) {
                currentHourId = hour.id;
            }
        }
        
        // After compline, show compline until midnight, then lauds
        if (currentMinutes < HOURS_SCHEDULE[0].hour * 60) {
            currentHourId = 'compline';
        }
        
        return currentHourId;
    }

    getNextHour() {
        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        
        for (let hour of HOURS_SCHEDULE) {
            const hourMinutes = hour.hour * 60 + hour.minute;
            if (currentMinutes < hourMinutes) {
                return hour;
            }
        }
        
        // Next hour is tomorrow's lauds
        return HOURS_SCHEDULE[0];
    }

    displayCurrentPrayer() {
        const hourId = this.getCurrentHour();
        this.displayPrayer(hourId);
    }

    displayPrayer(hourId) {
        this.currentHour = hourId;
        const prayer = PRAYERS[hourId];
        
        // Update header
        const schedule = HOURS_SCHEDULE.find(h => h.id === hourId);
        document.getElementById('prayerTime').textContent = prayer.time;
        document.getElementById('prayerName').textContent = prayer.name;
        document.getElementById('prayerLatin').textContent = prayer.latin;
        
        // Build prayer content
        const contentDiv = document.getElementById('prayerContent');
        contentDiv.innerHTML = '';
        
        prayer.content.forEach(section => {
            const sectionDiv = document.createElement('div');
            sectionDiv.className = 'prayer-section';
            
            if (section.title) {
                const title = document.createElement('div');
                title.className = 'section-title';
                title.textContent = section.title;
                sectionDiv.appendChild(title);
            }
            
            if (section.text) {
                const text = document.createElement('p');
                text.textContent = section.text;
                sectionDiv.appendChild(text);
            }
            
            if (section.verses) {
                section.verses.forEach(verse => {
                    const verseP = document.createElement('p');
                    verseP.className = 'verse';
                    verseP.textContent = verse;
                    sectionDiv.appendChild(verseP);
                });
            }
            
            contentDiv.appendChild(sectionDiv);
        });
        
        // Update completion checkbox
        const isCompleted = this.completions.completed.includes(hourId);
        document.getElementById('completionCheck').checked = isCompleted;
        
        // Update active navigation button
        document.querySelectorAll('.hour-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.hour === hourId);
        });
    }

    updateNextPrayer() {
        const nextHour = this.getNextHour();
        const prayer = PRAYERS[nextHour.id];
        
        document.getElementById('nextPrayerName').textContent = prayer.name;
        
        const now = new Date();
        const nextTime = new Date();
        nextTime.setHours(nextHour.hour, nextHour.minute, 0, 0);
        
        // If next prayer is tomorrow
        if (nextTime <= now) {
            nextTime.setDate(nextTime.getDate() + 1);
        }
        
        const diff = nextTime - now;
        const hours = Math.floor(diff / 3600000);
        const minutes = Math.floor((diff % 3600000) / 60000);
        
        let timeText = '';
        if (hours > 0) {
            timeText = `in ${hours}h ${minutes}m`;
        } else {
            timeText = `in ${minutes}m`;
        }
        
        document.getElementById('nextPrayerTime').textContent = timeText;
    }

    updateStats() {
        const statsGrid = document.getElementById('statsGrid');
        statsGrid.innerHTML = '';
        
        HOURS_SCHEDULE.forEach(hour => {
            const prayer = PRAYERS[hour.id];
            const isCompleted = this.completions.completed.includes(hour.id);
            
            const statItem = document.createElement('div');
            statItem.className = `stat-item ${isCompleted ? 'completed' : ''}`;
            
            if (isCompleted) {
                statItem.innerHTML = `
                    <div class="stat-checkmark">✓</div>
                    <div class="stat-hour">${prayer.name}</div>
                    <div class="stat-status">Prayed</div>
                `;
            } else {
                statItem.innerHTML = `
                    <div class="stat-hour">${prayer.name}</div>
                    <div class="stat-time">${prayer.time}</div>
                    <div class="stat-status">Pending</div>
                `;
            }
            
            statsGrid.appendChild(statItem);
        });
    }

    handleCompletion(isChecked) {
        if (isChecked) {
            if (!this.completions.completed.includes(this.currentHour)) {
                this.completions.completed.push(this.currentHour);
            }
        } else {
            this.completions.completed = this.completions.completed.filter(
                h => h !== this.currentHour
            );
        }
        
        this.saveCompletions();
        this.updateStats();
    }

    speakPrayer() {
        if (this.synth.speaking) {
            this.stopSpeaking();
            return;
        }
        
        const prayer = PRAYERS[this.currentHour];
        let textToSpeak = `${prayer.name}. ${prayer.description}. `;
        
        prayer.content.forEach(section => {
            if (section.title) {
                textToSpeak += `${section.title}. `;
            }
            if (section.text) {
                textToSpeak += `${section.text} `;
            }
            if (section.verses) {
                textToSpeak += section.verses.join('. ') + '. ';
            }
        });
        
        this.utterance = new SpeechSynthesisUtterance(textToSpeak);
        this.utterance.rate = 0.8;
        this.utterance.pitch = 1.0;
        this.utterance.volume = 1.0;
        
        this.utterance.onstart = () => {
            document.getElementById('speakBtn').style.display = 'none';
            document.getElementById('stopBtn').style.display = 'flex';
        };
        
        this.utterance.onend = () => {
            document.getElementById('stopBtn').style.display = 'none';
            document.getElementById('speakBtn').style.display = 'flex';
        };
        
        this.synth.speak(this.utterance);
    }

    stopSpeaking() {
        if (this.synth.speaking) {
            this.synth.cancel();
        }
        document.getElementById('stopBtn').style.display = 'none';
        document.getElementById('speakBtn').style.display = 'flex';
    }

    startAutoUpdate() {
        // Update every minute
        setInterval(() => {
            const newHour = this.getCurrentHour();
            if (newHour !== this.currentHour) {
                // Hour has changed, update display
                this.displayCurrentPrayer();
            }
            this.updateNextPrayer();
            
            // Check for new day
            const today = new Date().toDateString();
            if (today !== this.completions.date) {
                this.completions = { date: today, completed: [] };
                this.saveCompletions();
                this.updateStats();
                document.getElementById('completionCheck').checked = false;
            }
        }, 60000);
        
        // Update next prayer countdown more frequently
        setInterval(() => {
            this.updateNextPrayer();
        }, 30000);
    }

    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js')
                .then(reg => console.log('Service Worker registered', reg))
                .catch(err => console.log('Service Worker registration failed', err));
        }
    }
}

// Initialize app
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new HoursApp();
    });
} else {
    new HoursApp();
}