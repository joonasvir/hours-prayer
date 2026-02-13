# 🙏 Hours - Liturgical Prayer App

A beautiful, mobile-first web application for praying the Liturgy of the Hours throughout the day. Experience the ancient Christian tradition of fixed-hour prayer with automatically timed prayers, text-to-speech functionality, and a reverent, minimal interface.

## ✨ Features

- **Six Daily Prayer Times**: Lauds, Terce, Sext, None, Vespers, and Compline
- **Automatic Prayer Selection**: App displays the appropriate prayer based on current time
- **Text-to-Speech**: Listen to prayers read aloud with natural speech synthesis
- **Completion Tracking**: Mark prayers as complete and track your daily practice
- **Real-Time Clock**: Current time and date display with automatic updates
- **Next Prayer Countdown**: See when the next liturgical hour begins
- **Navigation Menu**: Easy access to all hours of prayer
- **Mobile-First Design**: Optimized for smartphones with responsive layout
- **Progressive Web App**: Install on your device and use offline
- **Clean Typography**: Elegant serif fonts for enhanced readability
- **Reverent Design**: Dark, contemplative color scheme

## 📖 Prayer Schedule

| Prayer | Time | Latin Name | Description |
|--------|------|------------|-------------|
| **Lauds** | 6:00 AM | Laudes | Morning Prayer |
| **Terce** | 9:00 AM | Tertia | Third Hour |
| **Sext** | 12:00 PM | Sexta | Midday Prayer |
| **None** | 3:00 PM | Nona | Ninth Hour |
| **Vespers** | 6:00 PM | Vesperae | Evening Prayer |
| **Compline** | 9:00 PM | Completorium | Night Prayer |

## 🚀 Getting Started

### Live Demo

Simply open `index.html` in a modern web browser, or deploy to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

### Installation as PWA

1. Open the app in your mobile browser
2. Tap the "Add to Home Screen" option
3. The app will install as a standalone application
4. Launch from your home screen like any native app

### Usage

1. **Automatic Prayer**: The app automatically displays the correct prayer for the current time
2. **Listen**: Tap the "Listen" button to hear the prayer read aloud
3. **Complete**: Mark prayers as complete to track your daily practice
4. **Navigate**: Use the menu button to browse all liturgical hours
5. **Offline**: Once installed, the app works completely offline

## 📱 Technical Details

### Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: No frameworks, pure performance
- **Web Speech API**: Text-to-speech for prayer reading
- **Service Workers**: Offline functionality and caching
- **LocalStorage**: Prayer completion persistence
- **PWA Manifest**: App installation support

### Browser Compatibility

- Chrome/Edge 60+ (recommended for best text-to-speech)
- Safari 11+
- Firefox 60+
- Opera 47+

### File Structure

```
hours-prayer/
├── index.html          # Main prayer interface
├── style.css           # Reverent, clean styling
├── script.js           # App logic and timing
├── prayers.js          # Prayer texts and schedule
├── manifest.json       # PWA manifest
├── service-worker.js   # Offline support
└── README.md          # Documentation
```

## 📚 Prayer Content

Each prayer includes:
- **Opening Verse**: Traditional invocation
- **Psalm**: Appropriate psalm for the hour
- **Doxology**: Glory Be prayer
- **Specific Prayer**: Hour-specific devotion
- **Canticle**: Traditional canticles (Magnificat for Vespers, Nunc Dimittis for Compline)

Prayers are based on traditional Christian liturgical texts, adapted for modern use.

## 🎨 Design Philosophy

- **Reverent**: Dark, contemplative color scheme promotes prayer
- **Readable**: Large serif fonts enhance text clarity
- **Minimal**: Clean interface removes distractions
- **Mobile-First**: Designed for prayer on the go
- **Accessible**: High contrast and clear typography
- **Traditional**: Honors liturgical tradition with modern technology

## 🔒 Privacy

All data is stored locally on your device:
- No analytics or tracking
- No external API calls (except optional text-to-speech)
- No personal data collection
- Works completely offline after first load

## 🌟 Use Cases

- **Personal Devotion**: Pray the hours individually throughout the day
- **Monastic Practice**: Follow traditional fixed-hour prayer schedule
- **Spiritual Formation**: Develop a rhythm of daily prayer
- **Liturgical Living**: Connect daily life with Church tradition
- **Morning and Evening Prayer**: Bookend your day with Lauds and Compline
- **Work Sanctification**: Brief prayer breaks with Terce, Sext, and None

## 🛠️ Customization

### Adding Your Own Prayers

Edit `prayers.js` to modify or add prayers:

```javascript
{
    name: 'Prayer Name',
    subtitle: 'Description',
    time: '12:00 PM',
    hour: 12,
    text: `<p>Your prayer text here...</p>`
}
```

### Styling

Modify CSS custom properties in `:root` to change colors:

```css
:root {
    --color-bg: #1a1a2e;
    --color-primary: #efd6ac;
    /* ... more variables */
}
```

## 🙏 About the Liturgy of the Hours

The Liturgy of the Hours, also known as the Divine Office, is the official set of daily prayers prescribed by the Catholic Church and practiced by other Christian traditions. It consists of psalms, hymns, prayers, and Scripture readings at specific times throughout the day, sanctifying time and maintaining continuous prayer.

This app makes this ancient practice accessible to modern believers through technology.

## 📄 License

MIT License - feel free to use, modify, and distribute.

## ✝️ Acknowledgments

Prayers adapted from traditional Christian liturgical sources including:
- The Liturgy of the Hours
- The Book of Common Prayer
- Monastic traditions

---

**Pray without ceasing** - 1 Thessalonians 5:17