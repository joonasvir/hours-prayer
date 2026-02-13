// Hours - Liturgical Prayer App
class HoursApp {
    constructor() {
        this.currentPrayerIndex = 0;
        this.completedPrayers = new Set();
        this.speechSynthesis = window.speechSynthesis;
        this.currentUtterance = null;
        this.isSpeaking = false;
        
        this.init();
    }

    init() {
        this.loadCompletedPrayers();
        this.setCurrentPrayerByTime();
        this.updateUI();
        this.setupEventListeners();
        this.startClock();
        this.registerServiceWorker();
    }

    loadCompletedPrayers() {
        const today = new Date().toDateString();
        const lastDate = localStorage.getItem('lastPrayerDate');
        
        if (lastDate !== today) {
            // New day, reset completed prayers
            this.completedPrayers = new Set();
            localStorage.setItem('lastPrayerDate', today);
            localStorage.removeItem('completedPrayers');
        } else {
            const saved = localStorage.getItem('completedPrayers');
            if (saved) {
                this.completedPrayers = new Set(JSON.parse(saved));
            }
        }
    }

    saveCompletedPrayers() {
        localStorage.setItem('completedPrayers', JSON.stringify([...this.completedPrayers]));
    }

    setCurrentPrayerByTime() {
        const now = new Date();
        const currentHour = now.getHours();
        
        // Find the appropriate prayer for current time
        let selectedIndex = 0;
        for (let i = PRAYERS.length - 1; i >= 0; i--) {
            if (currentHour >= PRAYERS[i].hour) {
                selectedIndex = i;
                break;
            }
        }
        
        this.currentPrayerIndex = selectedIndex;
    }

    getCurrentPrayer() {
        return PRAYERS[this.currentPrayerIndex];
    }

    getNextPrayer() {
        const nextIndex = (this.currentPrayerIndex + 1) % PRAYERS.length;
        return PRAYERS[nextIndex];
    }

    getTimeUntilNextPrayer() {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinutes = now.getMinutes();
        
        const nextPrayer = this.getNextPrayer();
        let nextHour = nextPrayer.hour;
        
        // If next prayer is before current hour, it's tomorrow
        if (nextHour <= currentHour) {
            nextHour += 24;
        }
        
        const hoursUntil = nextHour - currentHour;
        const minutesUntil = 60 - currentMinutes;
        
        if (hoursUntil === 0) {
            return `in ${minutesUntil}m`;
        } else if (minutesUntil === 60) {
            return `in ${hoursUntil}h`;
        } else {
            const adjustedHours = minutesUntil === 60 ? hoursUntil : hoursUntil - 1;
            return `in ${adjustedHours}h ${minutesUntil}m`;
        }
    }

    setupEventListeners() {
        // Navigation
        document.getElementById('nav-btn').addEventListener('click', () => {
            this.openNav();
        });

        document.getElementById('close-nav').addEventListener('click', () => {
            this.closeNav();
        });

        // Create overlay
        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.addEventListener('click', () => {
            this.closeNav();
        });
        document.body.appendChild(overlay);
        this.overlay = overlay;

        // Text-to-speech
        document.getElementById('speak-btn').addEventListener('click', () => {
            this.toggleSpeech();
        });

        // Complete button
        document.getElementById('complete-btn').addEventListener('click', () => {
            this.toggleComplete();
        });

        // Generate prayer list
        this.generatePrayerList();
    }

    generatePrayerList() {
        const prayerList = document.getElementById('prayer-list');
        prayerList.innerHTML = '';
        
        PRAYERS.forEach((prayer, index) => {
            const item = document.createElement('button');
            item.className = 'prayer-item';
            if (index === this.currentPrayerIndex) {
                item.classList.add('active');
            }
            if (this.completedPrayers.has(prayer.name)) {
                item.classList.add('completed');
            }
            
            item.innerHTML = `
                <div class="prayer-item-header">
                    <span class="prayer-item-name">${prayer.name}</span>
                    <span class="prayer-item-time">${prayer.time}</span>
                </div>
                <div class="prayer-item-subtitle">${prayer.subtitle}</div>
            `;
            
            item.addEventListener('click', () => {
                this.selectPrayer(index);
                this.closeNav();
            });
            
            prayerList.appendChild(item);
        });
    }

    selectPrayer(index) {
        this.stopSpeech();
        this.currentPrayerIndex = index;
        this.updateUI();
        this.generatePrayerList();
    }

    openNav() {
        document.getElementById('nav-menu').classList.add('open');
        this.overlay.classList.add('active');
    }

    closeNav() {
        document.getElementById('nav-menu').classList.remove('open');
        this.overlay.classList.remove('active');
    }

    toggleSpeech() {
        if (this.isSpeaking) {
            this.stopSpeech();
        } else {
            this.startSpeech();
        }
    }

    startSpeech() {
        const prayer = this.getCurrentPrayer();
        const prayerText = this.stripHTML(prayer.text);
        
        this.currentUtterance = new SpeechSynthesisUtterance(prayerText);
        this.currentUtterance.rate = 0.8;
        this.currentUtterance.pitch = 1;
        this.currentUtterance.volume = 1;
        
        this.currentUtterance.onend = () => {
            this.isSpeaking = false;
            this.updateSpeakButton();
        };
        
        this.speechSynthesis.speak(this.currentUtterance);
        this.isSpeaking = true;
        this.updateSpeakButton();
    }

    stopSpeech() {
        if (this.speechSynthesis.speaking) {
            this.speechSynthesis.cancel();
        }
        this.isSpeaking = false;
        this.updateSpeakButton();
    }

    updateSpeakButton() {
        const btn = document.getElementById('speak-btn');
        const text = document.getElementById('speak-text');
        
        if (this.isSpeaking) {
            btn.classList.add('speaking');
            text.textContent = 'Stop';
        } else {
            btn.classList.remove('speaking');
            text.textContent = 'Listen';
        }
    }

    toggleComplete() {
        const prayer = this.getCurrentPrayer();
        
        if (this.completedPrayers.has(prayer.name)) {
            this.completedPrayers.delete(prayer.name);
        } else {
            this.completedPrayers.add(prayer.name);
        }
        
        this.saveCompletedPrayers();
        this.updateCompleteButton();
        this.generatePrayerList();
    }

    updateCompleteButton() {
        const btn = document.getElementById('complete-btn');
        const prayer = this.getCurrentPrayer();
        
        if (this.completedPrayers.has(prayer.name)) {
            btn.classList.add('completed');
        } else {
            btn.classList.remove('completed');
        }
    }

    stripHTML(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    }

    updateUI() {
        const prayer = this.getCurrentPrayer();
        const nextPrayer = this.getNextPrayer();
        
        // Update header
        document.getElementById('prayer-title').textContent = prayer.name;
        document.getElementById('prayer-subtitle').textContent = prayer.subtitle;
        
        // Update prayer text
        document.getElementById('prayer-text').innerHTML = prayer.text;
        
        // Update next prayer info
        document.getElementById('next-prayer-name').textContent = nextPrayer.name;
        document.getElementById('next-prayer-time').textContent = this.getTimeUntilNextPrayer();
        
        // Update buttons
        this.updateCompleteButton();
        this.updateSpeakButton();
    }

    startClock() {
        this.updateClock();
        setInterval(() => {
            this.updateClock();
            
            // Check if we need to update to next prayer
            const now = new Date();
            const currentHour = now.getHours();
            const prayer = this.getCurrentPrayer();
            
            if (currentHour >= prayer.hour) {
                const nextPrayer = this.getNextPrayer();
                if (currentHour >= nextPrayer.hour && nextPrayer.hour > prayer.hour) {
                    this.setCurrentPrayerByTime();
                    this.updateUI();
                    this.generatePrayerList();
                }
            }
        }, 1000);
    }

    updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        });
        const dateString = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
        });
        
        document.getElementById('current-time').textContent = timeString;
        document.getElementById('current-date').textContent = dateString;
    }

    async registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            try {
                await navigator.serviceWorker.register('./service-worker.js');
                console.log('Service Worker registered');
            } catch (error) {
                console.log('Service Worker registration failed:', error);
            }
        }
    }
}

// Initialize app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new HoursApp());
} else {
    new HoursApp();
}