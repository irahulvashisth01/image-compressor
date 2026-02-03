# 🖼 Professional Image Compressor Web App

A fast, lightweight, and modern browser-based Image Compressor built using **HTML, CSS, and JavaScript**.

This tool allows users to:
✔ Upload images  
✔ Resize images  
✔ Compress images to target size (KB)  
✔ Preview before & after  
✔ Download compressed image  

No server required. Works 100% in the browser 🚀

## 📌 Features

✨ Client-side compression (no upload to server)  
✨ Target file size control (KB)  
✨ Optional image resizing  
✨ Before/After preview  
✨ Download compressed image  
✨ Fast performance using Canvas API  
✨ Mobile responsive UI  
✨ Dark professional design  

## 🛠 Tech Stack

- HTML5
- CSS3 (Flexbox + Modern UI)
- JavaScript (Vanilla JS)
- Canvas API
- createImageBitmap()


## 📂 Project Structure
Image-Compressor/
│
├── index.html → Main UI
├── style.css → Styling
├── script.js → Compression logic
└── README.md → Documentation

## Files Explanation

### index.html
Main webpage structure and UI elements  
:contentReference[oaicite:1]{index=1}

### script.js
Contains:
- Image upload
- Resize logic
- Quality reduction loop
- Compression
- Download feature  
:contentReference[oaicite:2]{index=2}

### style.css
Handles:
- Dark theme
- Layout
- Buttons
- Responsive design  
:contentReference[oaicite:3]{index=3}

## ⚙ How It Works

### Step 1 — Upload Image
User selects any JPG/PNG file.

### Step 2 — Resize (Optional)
Enter max width to scale image.

### Step 3 — Set Target Size
Enter size in KB.

### Step 4 — Compression Logic
App:
1. Draws image on Canvas
2. Reduces JPEG quality gradually
3. Stops when target size reached

### Step 5 — Download
Compressed file saved locally.

## How to Run

### Method 1 (Simple)


## Example

| Before | After |
|--------|--------|
| 2.5 MB | 120 KB |

##  Use Cases

- College assignments
- Portfolio project
- Website image optimization
- Reduce image size before uploading
- Faster web performance

##  Future Improvements

You can add:

- Drag & drop upload
- Multiple image compression
- PNG/WebP support
- Compression percentage slider
- Batch download (ZIP)
- Cloud storage
- AI auto optimization

##  Author

Rahul Vashisth  
Engineering Student  

##  License

Free to use for learning and educational purposes.

