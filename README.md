# 🙏 Hours - Liturgical Prayer

A mobile-first Progressive Web App for praying the Liturgy of the Hours throughout the day. Experience the ancient Christian tradition of sanctifying time through prayer.

## ✨ Features

- **Six Daily Prayer Hours**: Lauds, Terce, Sext, None, Vespers, and Compline
- **Automatic Display**: Shows the appropriate prayer based on current time
- **Text-to-Speech**: Listen to prayers read aloud with natural voice
- **Progress Tracking**: Mark prayers as completed and track daily progress
- **Navigation**: Jump to any liturgical hour at any time
- **Offline Support**: All prayers available offline as a PWA
- **Reverent Design**: Clean, readable typography optimized for spiritual focus

## 📖 The Liturgical Hours

### Lauds (6:00 AM) - Morning Prayer
*Laudes Matutinae*  
Greet the new day with praise and thanksgiving. The Church's principal morning prayer.

### Terce (9:00 AM) - Third Hour
*Tertia*  
Mid-morning prayer commemorating the descent of the Holy Spirit at Pentecost.

### Sext (12:00 PM) - Sixth Hour
*Sexta*  
Midday prayer. Pause at the sun's zenith to restore your soul.

### None (3:00 PM) - Ninth Hour
*Nona*  
Afternoon prayer remembering Christ's death on the cross.

### Vespers (6:00 PM) - Evening Prayer
*Vesperae*  
Evening thanksgiving as day draws to close. Principal evening prayer of the Church.

### Compline (9:00 PM) - Night Prayer
*Completorium*  
Prayer before sleep, completing the day with trust in God's protection.

## 🚀 Getting Started

### Quick Start

1. Open the app in your browser
2. The current liturgical hour displays automatically
3. Read the prayers or tap the speaker icon to listen
4. Mark prayers as completed to track your practice
5. Use navigation buttons to view other hours

### Install as PWA

#### iOS (Safari)
1. Tap the Share button
2. Select "Add to Home Screen"
3. Name it "Hours" and tap "Add"

#### Android (Chrome)
1. Tap the menu (⋮)
2. Select "Install app" or "Add to Home Screen"
3. Tap "Install"

## 🎯 How to Use

### Daily Practice

1. **Morning**: Begin with Lauds upon waking
2. **Throughout the Day**: Pray the hours at their appointed times
3. **Evening**: Close the day with Vespers and Compline
4. **Track Progress**: Mark each hour as completed

### Text-to-Speech

- Tap the speaker icon (🔊) to hear prayers read aloud
- Adjust reading speed in your device's accessibility settings
- Stop at any time with the stop button (⏹️)

### Navigation

- The app automatically shows the current liturgical hour
- Tap any hour button to view a different prayer
- The active hour is highlighted in the navigation

### Completion Tracking

- Check "Mark as prayed" after completing each hour
- View your daily progress in the stats card
- Progress resets each day at midnight

## 📱 Technical Details

### Technologies
- **Vanilla JavaScript**: Lightweight, no frameworks
- **Web Speech API**: Text-to-speech functionality
- **CSS Grid & Flexbox**: Responsive layouts
- **Service Worker**: Offline capabilities
- **Local Storage**: Progress tracking
- **PWA Manifest**: Native app experience

### Browser Support
- Chrome/Edge (Desktop & Mobile)
- Safari (iOS & macOS)
- Firefox (Desktop & Mobile)
- Text-to-speech requires browser support for Web Speech API

### Performance
- Total app size: < 80KB
- No external dependencies
- All prayers stored locally
- Works completely offline

## 🕊️ Spiritual Practice

### Benefits of the Liturgy of the Hours

1. **Sanctification of Time**: Transform ordinary moments into sacred encounters
2. **Union with the Church**: Join believers worldwide in communal prayer
3. **Scripture Immersion**: Pray the Psalms and sacred texts
4. **Daily Rhythm**: Structure your day around prayer
5. **Spiritual Discipline**: Develop consistency in prayer life

### Tips for Beginners

- **Start Small**: Begin with just morning (Lauds) and evening (Compline)
- **Set Reminders**: Use your device's alarm for prayer times
- **Be Flexible**: If you miss a time, pray it when you can
- **Pray Slowly**: Take time to meditate on the words
- **Make it Habit**: Consistency matters more than perfection

### Advanced Practice

- Memorize favorite psalms and canticles
- Add personal intercessions after each hour
- Pray in community when possible
- Study the liturgical seasons and feast days
- Integrate with daily Mass attendance

## 🔧 Development

### Local Setup

```bash
# Clone repository
git clone https://github.com/joonasvir/hours-prayer.git

# Navigate to directory
cd hours-prayer

# Serve locally
python -m http.server 8000

# Visit http://localhost:8000
```

### File Structure

```
hours-prayer/
├── index.html          # Main interface
├── style.css           # Reverent styling
├── script.js           # App logic
├── prayers.js          # Prayer texts and data
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline support
└── README.md          # Documentation
```

### Customization

To add or modify prayers:

1. Edit `prayers.js`
2. Follow the existing prayer object structure
3. Update HOURS_SCHEDULE if changing times
4. Maintain liturgical authenticity

## 📚 Resources

### Learn More

- [Liturgy of the Hours (Wikipedia)](https://en.wikipedia.org/wiki/Liturgy_of_the_Hours)
- [Universalis](https://universalis.com/) - Complete daily hours
- [Divinum Officium](http://divinumofficium.com/) - Traditional Latin office
- [iBreviary](https://www.ibreviary.org/) - Official Vatican app

### Prayer Texts

The prayers in this app are simplified versions drawn from:
- The Psalms
- Traditional Christian canticles
- Ancient liturgical prayers
- Biblical passages

## 📄 License

MIT License - Free to use and modify for personal prayer and spiritual growth.

## 🙏 Acknowledgments

Inspired by centuries of monastic tradition and the universal call to prayer. May this app help you pray without ceasing.

---

*"Seven times a day I praise you" - Psalm 119:164*

*"Pray without ceasing" - 1 Thessalonians 5:17*