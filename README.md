# 🎬 Movie Explorer 2025

A simple movie explorer web app built with **HTML, TailwindCSS, and Vanilla JavaScript**.  
This app fetches data from the [TVMaze API](https://www.tvmaze.com/api) using **Axios** and allows users to:

- 🔍 Search for movies or TV shows  
- ⭐ View trending films (default on load)  
- 📖 See details like genres, rating, and summary via a modal popup  
- 📱 Enjoy a responsive design with TailwindCSS  

---

## 🚀 Features
- **Trending Movies** → Show 20 trending films when the page loads  
- **Search Functionality** → Search movies/shows by keyword  
- **Responsive UI** → Mobile-friendly navigation with TailwindCSS  
- **Modal Popup** → Click on a movie card to view details (image, genre, rating, description)  
- **Dark Theme** → Modern glassmorphism-inspired UI  

---

## 🛠️ Tech Stack
- **Frontend**: HTML, TailwindCSS (via npm)  
- **JavaScript**: Vanilla JS + Axios for API requests  
- **API**: [TVMaze API](https://api.tvmaze.com)  
- **Deployment**: GitHub Pages  

---

## 📂 Project Structure
``` yaml
├── index.html             # Main HTML file (entry point)
├── src/
│   ├── css/
│   │   └── input.css      # Tailwind input file (before build)
│   ├── js/
│   │   └── app.js         # Main JavaScript logic
│   └── assets/            # (optional) images, icons, etc.
├── dist/
│   ├── css/
│   │   └── output.css     # Compiled Tailwind CSS (build result)
│   └── js/
│       └── app.js         # (optional) if kamu pakai bundler/minifier
├── package.json           # NPM configuration + scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS config (if used)
└── .gitignore             # Files/folders to ignore by Git

```

---

## ⚡ Installation & Setup
1. Clone this repo:
   ```bash
   git clone https://github.com/itszarmaull/FilmSederhana.git
   cd movie-explorer
   
2. Install dependencies:
   ```bash
   npm install
3. Run Tailwind build:
  ```bash
  npm run build
```
4. Open index.html in your browser 🚀
``` yaml
🌐 Deployment (GitHub Pages)

This project is deployed with GitHub Pages.
Check it out here 👉 https://USERNAME.github.io/movie-explorer/
```
### 🙌 Credits
``` yaml
TVMaze API
 for the movie/show data

TailwindCSS
 for the styling

Axios
 for the HTTP requests
```
