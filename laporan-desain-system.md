# Laporan Mini Design System STIKOM UI

## 1. Keputusan Design Token

Design token dibuat di `src/styles/theme.js` dan dibagi menjadi empat kategori utama, yaitu warna, tipografi, spacing, dan radius. Pilihan warna utama berangkat dari identitas STIKOM PGRI Banyuwangi yang kuat dan akademik, yaitu kombinasi biru untuk kepercayaan, biru muda untuk keterbukaan, dan kuning sebagai aksen yang memberi kesan dinamis namun tetap profesional. Kedua tema, `lightTheme` dan `darkTheme`, dibuat agar antarmuka tetap nyaman dibaca di kondisi pencahayaan yang berbeda tanpa mengubah struktur desain.

## 2. Alasan Pemilihan Warna, Tipografi, Spacing, dan Radius

Warna primary `#043975` dipilih karena memberi kesan formal dan terpercaya, sesuai dengan institusi pendidikan yang memiliki karakter profesional. Secondary `#0384D6` memberi ruang untuk depth dan modernity, sedangkan accent `#FFBF1B` berfungsi sebagai elemen highlight yang menonjol tanpa mengganggu fokus utama. Tipografi menggunakan `Montserrat` karena bentuknya modern, rapi, dan mudah dibaca pada tampilan website pendidikan. Spacing dibuat dengan skala yang konsisten, mulai dari 4px hingga 48px, untuk menjaga keseimbangan visual dan keterbacaan antar elemen. Radius dibuat dengan nilai yang cukup halus agar kartu, tombol, dan badge tampak rapi tetapi tetap tidak terlalu bulat.

## 3. Implementasi Styled Components

Semua komponen seperti Button, Card, Badge, Navbar, Footer, hingga halaman utama dibuat dengan Styled Components. Pendekatan ini sangat cocok untuk membangun reusable component yang memanfaatkan props dan theme. Misalnya, `variant` pada button dan `badge` akan otomatis menyesuaikan dengan warna tema, sedangkan `Card` dan `Navbar` mengikuti background, border, spacing, serta shadow dari token.

## 4. Kendala Teknis dan Solusi pada Next.js App Router

Pada Next.js App Router, penggunaan styled-components memerlukan konfigurasi SSR agar komponen dapat dirender dengan benar di server sebelum dikirim ke browser. Solusinya adalah menambahkan `StyledComponentsRegistry.js` dan menghubungkannya pada `layout.js` serta mengaktifkan `compiler.styledComponents` di `next.config.mjs`. Hal ini memastikan style tertangkap dengan baik di render server.

Selain itu, implementasi dark mode membutuhkan pengelolaan tema yang aman pada sisi klien agar tidak menimbulkan hydration mismatch. Solusi yang dipakai adalah `ThemeProvider` dengan state awal yang dibaca dari `localStorage` dan atribut `suppressHydrationWarning` pada root layout agar Next.js tidak memunculkan error render saat tema berubah. Dengan cara ini, komponen seperti button, card, badge, dan navbar tetap mengikuti tema aktif tanpa reload halaman.
