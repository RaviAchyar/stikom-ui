# Mini Design System STIKOM UI

Mini Design System STIKOM UI adalah proyek tugas kuliah yang dibuat untuk memperlihatkan penerapan design system modern di lingkungan kampus STIKOM PGRI Banyuwangi. Proyek ini fokus pada halaman profil institusi dan katalog komponen reusable yang dibangun dengan Next.js App Router dan Styled Components.

## Tujuan Proyek

- Membangun design system yang konsisten untuk produk digital kampus.
- Menggunakan identitas visual STIKOM PGRI Banyuwangi secara modern dan profesional.
- Menampilkan prinsip UI/UX yang bersih, responsif, dan mudah dipelajari untuk mahasiswa.
- Menyediakan komponen reusable untuk kebutuhan landing page, profil institusi, dan katalog UI.

## Teknologi yang Digunakan

- Next.js App Router
- React
- JavaScript (JS)
- Styled Components
- ThemeProvider
- localStorage untuk mode tema
- npm

## Struktur Folder

```bash
stikom-ui/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   └── catalog/
│   │       └── page.js
│   ├── components/
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Badge.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ThemeProvider.js
│   │   ├── ThemeToggle.js
│   │   └── StyledComponentsRegistry.js
│   └── styles/
│       ├── theme.js
│       └── GlobalStyles.js
├── README.md
├── package.json
├── next.config.mjs
├── jsconfig.json
├── laporan-desain-system.md
└── package-lock.json
```

## Cara Instalasi

1. Pastikan Node.js dan npm sudah terinstal.
2. Masuk ke folder proyek.
3. Jalankan:

```bash
npm install
```

## Cara Menjalankan Proyek

```bash
npm run dev
```

Akses aplikasi di browser:

```bash
http://localhost:3000
```

## Penjelasan Design Token

File desain token berada di `src/styles/theme.js`. Tema dibuat dalam dua varian:

- `lightTheme`
- `darkTheme`

Token dibagi menjadi 4 kategori:

### 1. Colors
- Primary: `#043975`
- Secondary: `#0384D6`
- Accent: `#FFBF1B`
- Background, Surface, Text, Muted, Border

### 2. Typography
- Font family: `Montserrat`
- heading, subheading, body, caption

### 3. Spacing
- `xs: 4px`, `sm: 8px`, `md: 16px`, `lg: 24px`, `xl: 32px`, `2xl: 48px`

### 4. Radius
- `sm: 4px`, `md: 8px`, `lg: 12px`, `xl: 16px`, `full: 9999px`

Semua komponen mengambil nilai dari theme agar desain tetap konsisten.

## Penjelasan Komponen

### Button
Button memiliki 3 variant (`primary`, `secondary`, `outline`) dan 2 ukuran (`small`, `medium`). Komponen ini mendukung hover, transition, disabled state, dan theme-aware color system.

### Card
Card dibuat untuk menampilkan konten informasi seperti profil kampus, fitur utama, dan berita. Card memiliki border, shadow, radius, dan hover subtle yang sesuai dengan gaya institusi modern.

### Badge
Badge digunakan untuk status, label kategori, dan penanda informasi. Versi yang tersedia: `primary`, `success`, `warning`, dan `neutral`.

## Implementasi Light Mode dan Dark Mode

Mode tema diatur dengan `ThemeProvider` menggunakan React Context. Data tema disimpan di `localStorage` agar preferensi pengguna tetap terjaga saat reload. Nilai awal disesuaikan agar tidak terjadi hydration mismatch di Next.js App Router.

## Catatan Pengembangan

Project ini menggunakan styled-components dan registry SSR agar style bekerja sesuai dengan Next.js App Router. Semua style dibuat dengan CSS-in-JS, tanpa Tailwind, CSS Modules, atau framework styling lain.
