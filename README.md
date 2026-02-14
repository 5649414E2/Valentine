# 💕 Luxury Valentine's Website

A cinematic, multi-page romantic website built as a Valentine's Day gift.

## 📁 File Structure

```
valentines-website/
├── index.html       ← Home / Landing Page
├── memories.html    ← Photo Gallery
├── letter.html      ← Love Letter
├── poem.html        ← Poem Page
├── surprise.html    ← Final Surprise
├── style.css        ← Shared Styles (design system)
├── script.js        ← Shared JavaScript (stars, hearts, animations)
├── photos/          ← Create this folder and add your photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── ...
└── README.md
```

---

### 1. Add Your Photos
1. Create a folder called `photos/` inside the project folder
2. Copy your photo files into it (JPG, PNG, WEBP all work)
3. Open `memories.html`
4. Find each `<div class="photo-placeholder">` block
5. Replace it with: `<img src="photos/your-filename.jpg" alt="Your description">`
6. Edit the caption date and text below each photo

### 2. Edit the Love Letter
1. Open `letter.html`
2. Find the section marked `<!-- ✏️ YOUR LETTER GOES HERE -->`
3. Replace the `<p>` paragraph content with your own words
4. Use `<em>text</em>` for gold italic highlights
5. Use `<strong>text</strong>` for pink highlights
6. Change the greeting ("My Dearest Love,") and signature

### 3. Edit the Poem
1. Open `poem.html`
2. Find the section marked `<!-- ✏️ YOUR POEM GOES HERE -->`
3. Each `<div class="stanza">` is one verse
4. Each `<span class="poem-line">` is one line
5. Add `class="gold"` for gold text, `class="pink"` for pink text
6. Add `class="large"` for a bigger, more dramatic closing line

### 4. Edit the Surprise Message
1. Open `surprise.html`
2. Find `<!-- ✏️ YOUR HIDDEN ROMANTIC MESSAGE GOES HERE -->`
3. Edit the hidden message text
4. Change the final big message: `<h2 class="final-message">`
5. Change the closing line: `<p class="final-sub">`

### 5. Change Names & Dates
- Search for "Valentine's Day · 2025" to find and change the date label
- Search for "My Love" to change the home page title
- Each page has `<!-- ✏️ EDIT -->` comments marking editable sections

---

## 🚀 Deploy to GitHub Pages

1. **Create a GitHub account** at github.com if you don't have one

2. **Create a new repository:**
   - Click the `+` button → "New repository"
   - Name it: `valentines` (or anything you like)
   - Set to **Public**
   - Click "Create repository"

3. **Upload all files:**
   - Click "uploading an existing file"
   - Drag ALL the files from this folder into the upload area
   - If you have photos, upload those too (in a `photos/` subfolder)
   - Click "Commit changes"

4. **Enable GitHub Pages:**
   - Go to repository **Settings**
   - Click **Pages** in the left sidebar
   - Under "Source", select **Deploy from a branch**
   - Choose branch: **main** (or master)
   - Folder: **/ (root)**
   - Click **Save**

5. **Your site will be live at:**
   `https://YOUR-USERNAME.github.io/valentines/`

   (It may take 1–5 minutes to go live after first deploy)

---

## 🎨 Design Details

- **Fonts:** Cinzel (display) · Cormorant Garamond (body) · EB Garamond (elegant)
- **Colors:** Deep black · Midnight purple · Gold (#c9a84c) · Pink glow (#ff6b9d)
- **Effects:** Animated star field · Floating hearts · Page transitions · Glow halos
- **Fully responsive** — looks beautiful on phones, tablets, and desktop

---

*Built with love, for love. Happy Valentine's Day 💕*
