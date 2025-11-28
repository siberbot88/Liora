# Liora Match - Platform Guru Privat Premium 🎓✨

![Liora Match Banner](https://placehold.co/1200x630/050608/00ADB5?text=Liora+Match)

**Liora Match** adalah platform modern yang menghubungkan siswa dengan guru privat terverifikasi. Website ini dirancang dengan estetika premium, animasi interaktif, dan pengalaman pengguna yang imersif (scroll storytelling) untuk memberikan kesan profesional dan terpercaya.

## 🌟 Fitur Unggulan

### 1. **Interactive Welcome Screen (Splash)** 🌌
Halaman pembuka yang memukau dengan **partikel konstelasi interaktif**.
- **Teknologi**: HTML5 Canvas & Physics-based animation.
- **Interaksi**: Partikel bereaksi terhadap gerakan mouse (efek tolak-menolak halus) dan memiliki efek inersia (friction).
- **Fungsi**: Memberikan impresi pertama yang kuat sebelum masuk ke konten utama.

### 2. **Cinematic Scroll Storytelling** 📜
Pengalaman naratif yang dipicu oleh scroll pengguna, terinspirasi oleh desain web kelas dunia (seperti *Savoir-faire*).
- **For Parents**: Perjalanan dari "kebingungan" mencari guru hingga menemukan "solusi" di Liora, lengkap dengan efek kabut atmosferik dan *spotlight reveal*.
- **For Teachers**: Visualisasi transformasi dari administrasi yang ribet menjadi dashboard yang bersih dan *empowering*.
- **Teknologi**: `framer-motion` untuk animasi dan `lenis` untuk *smooth inertia scrolling*.

### 3. **Premium Dark Mode Aesthetic** 🎨
- **Tema**: *Deep Black* (`#050608`) dengan aksen *Turquoise* (`#00ADB5`).
- **Glassmorphism**: Penggunaan efek kaca buram (*backdrop-blur*) pada kartu, navbar, dan elemen UI untuk kedalaman visual.
- **Typography**: Kombinasi font **Outfit** (Modern, Geometric) untuk judul dan **Plus Jakarta Sans** (Clean) untuk teks tubuh.

### 4. **Interactive Hero Section** ⚔️
- **Slash Reveal**: Hero section dengan efek *draggable slash* yang memungkinkan pengguna melihat perbandingan "Sebelum" dan "Sesudah" menggunakan Liora.

### 5. **Unified Help Center** 📚
- Pusat bantuan terintegrasi dengan navigasi khusus untuk Orang Tua dan Guru.
- **Animated FAQ**: Pertanyaan umum dengan animasi *accordion* yang halus.

---

## 🛠️ Tech Stack

Project ini dibangun menggunakan teknologi web modern untuk performa dan pengalaman developer terbaik:

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
  - Menggunakan CSS variables untuk konfigurasi tema dinamis.
- **Animation**:
  - [Framer Motion](https://www.framer.com/motion/): Untuk animasi kompleks, transisi halaman, dan *scroll triggers*.
  - [Lenis](https://lenis.studio/): Untuk *smooth scrolling* yang mewah.
- **Icons**: [Heroicons](https://heroicons.com/)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Outfit & Plus Jakarta Sans)

---

## 🚀 Cara Menjalankan Project

### Prasyarat
- Node.js (versi 18 atau terbaru)
- npm / yarn / pnpm

### Instalasi

1.  **Clone repository:**
    ```bash
    git clone https://github.com/siberbot88/Liora.git
    cd Liora
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # atau
    yarn install
    ```

3.  **Jalankan Development Server:**
    ```bash
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4.  **Build untuk Produksi:**
    ```bash
    npm run build
    npm start
    ```

---

## 📂 Struktur Project

```
├── app/
│   ├── docs/               # Halaman Dokumentasi / Help Center
│   │   ├── for-parents/    # Storytelling Page untuk Orang Tua
│   │   └── for-teachers/   # Storytelling Page untuk Guru
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── layout.tsx          # Root layout (Fonts, Meta tags)
│   └── page.tsx            # Landing Page utama
├── components/
│   ├── scroll/             # Komponen khusus Scroll Storytelling
│   │   ├── SmoothScroll.tsx
│   │   ├── StorySection.tsx
│   │   └── ParallaxLayer.tsx
│   ├── WelcomeScreen.tsx   # Komponen Splash Screen Canvas
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ...
└── public/                 # Aset statis (gambar, ikon)
```

---

## 🤝 Kontribusi

Kontribusi selalu diterima! Silakan buat *Pull Request* untuk perbaikan atau fitur baru.

---

**Liora Match** — *Connecting Minds, Shaping Futures.*
