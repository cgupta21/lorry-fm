# 🚛 LORRY.FM

**Highway anthems from the back of a Tata 407.**

The horn-honking, dhaba-stop radio player that lives inside every decorated Indian truck cabin — reimagined as a website.

🔗 **Live Demo:** [lorry-fm.vercel.app](https://lorry-fm.vercel.app/)
📦 **Repository:** [github.com/cgupta21/lorry-fm](https://github.com/cgupta21/lorry-fm)

![Made with HTML CSS JS](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-orange)
![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)
![No Framework](https://img.shields.io/badge/Framework-None-brightgreen)

---

## 🎵 About

`LORRY.FM` is a single-page music player inspired by the vibrant, hand-painted trucks that roll across Indian highways. It blends lorry culture, dhaba-stop nostalgia, and classic Hindi music into one nostalgic browsing experience — no framework, no build step, just HTML, CSS, and vanilla JavaScript.

---

## ✨ Features

- 🎵 50-song curated playlist player
- ▶️ Play / Pause, ⏮️ Previous, ⏭️ Next controls
- ⏱️ Draggable and keyboard-accessible seek bar
- 🖼️ Individual cover art for every song
- 📯 3 unique horn buttons with dedicated sounds
- ⏸️ Music auto-pauses when a horn plays, then resumes automatically
- 🔊 Horn audio never mixes with the song
- 🕐 Live clock
- 💬 Rotating truck-art style messages
- 📊 Animated music equalizer
- 🚛 Animated highway + lorry background with dusk visual effects
- 📱 Fully responsive design
- ♿ Keyboard accessible, with `prefers-reduced-motion` support
- 🔗 Spotify and GitHub links

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure |
| CSS3 | Styling & animations |
| JavaScript | Player logic & interactivity |
| HTML5 Audio API | Music playback |
| Web Audio API | Synthesized horn fallback |
| SVG | Custom highway graphics |
| Google Fonts | Typography |
| Vercel | Deployment |

---

## 📯 How the Horn System Works

Horns and music are designed to never overlap:

```
🎵 Song Playing → 📯 Horn Clicked → ⏸️ Song Pauses → 🔊 Horn Plays → ▶️ Song Resumes
```

Each horn button uses its own audio file. If the file is unavailable, a synthesized fallback tone (via the Web Audio API) plays instead.

---

## 📁 Project Structure

```
lorry-fm/
│
├── index.html
├── style.css
├── script.js
│
├── favicon.svg
├── favicon-32.png
├── favicon-192.png
├── og-image.png
│
├── assets/
│   └── covers/
│       ├── song1.jpg
│       ├── song2.jpg
│       └── ... (up to song50.jpg)
│
├── music/
│   ├── song1.mp3 ... song50.mp3
│   ├── horn1.mp3
│   ├── horn2.mp3
│   └── horn3.mp3
│
└── README.md
```

---

## 🚀 Running Locally

LORRY.FM is a static site — no build tools required.

```bash
# Clone the repository
git clone https://github.com/cgupta21/lorry-fm.git

# Move into the project folder
cd lorry-fm
```

Then either:

- Open `index.html` directly in your browser, **or**
- Use VS Code's **Live Server** extension for a smoother dev experience, **or**
- Run a quick local server with Python:

```bash
python3 -m http.server 8000
```

Then visit **http://localhost:8000**

---

## 🎵 Adding Songs

The playlist lives in `script.js`:

```js
var playlist = [
  {
    title: "Highway Ki Rani",
    artist: "Lorry Wale Bhaiya & The Dashboard Deities",
    src: "music/song1.mp3",
    cover: "assets/covers/song1.jpg"
  }
];
```

To add a new song:

1. Drop the `.mp3` file into `music/`
2. Add the cover image to `assets/covers/`
3. Add a new entry to the `playlist` array:

```js
{
  title: "Your Song",
  artist: "Artist Name",
  src: "music/song51.mp3",
  cover: "assets/covers/song51.jpg"
}
```

---

## 📯 Adding Horn Sounds

Horns are configured in `script.js`:

```js
var hornSounds = [
  { src: "music/horn1.mp3", freqs: [220, 277] },
  { src: "music/horn2.mp3", freqs: [330, 415] },
  { src: "music/horn3.mp3", freqs: [165, 208] }
];
```

`freqs` are used to synthesize a fallback horn tone if the audio file is missing.

---

## 💬 Customizing Truck-Art Messages

The rotating messages under the LORRY.FM heading come from the `rotatingLines` array in `script.js`. Add your own highway-inspired lines to make it yours.

---

## 🎨 Design Inspiration

- 🚛 Decorated Indian lorries
- 🛣️ Indian highways
- 🍛 Dhaba culture
- 📯 Truck horns
- 🎵 Classic Hindi music
- 🌅 Highway sunsets
- 🎨 Traditional truck-art aesthetics

**Color Palette:** 🟡 Highway Yellow · 🟠 Dhaba Orange · 🟢 Highway Teal · 🟤 Asphalt Brown · 🤍 Cream

---

## 🌐 Deployment

Deployed on **Vercel**, connected directly to this GitHub repository. Every push to the repo triggers an automatic redeployment.

**Live:** https://lorry-fm.vercel.app/

---

## 🔮 Roadmap

- [ ] Shuffle mode
- [ ] Repeat mode
- [ ] Volume control
- [ ] Song search
- [ ] Favorite songs
- [ ] Custom playlists
- [ ] More horn sounds
- [ ] Real-time listener counter
- [ ] Progressive Web App support
- [ ] Improved mobile experience
- [ ] More interactive truck animations

---

## ⚠️ Copyright Notice

This project is built for educational and portfolio purposes. Ensure you have the necessary rights or permissions for any music files distributed publicly with the project.

---

## 👨‍💻 Author

**Chandan Gupta**
GitHub: [@cgupta21](https://github.com/cgupta21)

---

## ⭐ Support

If you like this project, consider giving the repo a ⭐ on GitHub!
