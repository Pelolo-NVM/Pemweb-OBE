# Proyek Pemrograman Web OBE

**Identitas Mata Kuliah**

- Mata Kuliah: Pemrograman Web (26TJ453127)
- Program Studi: Sarjana Teknik Komputer
- Universitas: Universitas Borneo Tarakan
- Nama Mahasiswa: Febryano Putra (2440304020)

## Deskripsi Singkat Proyek

Proyek semester ini difokuskan pada pengembangan antarmuka dan layanan sistem web untuk UMKM Seblak Prasmanan. Aplikasi ini dikembangkan secara inkremental mulai dari prototipe front-end hingga menjadi produk full-stack untuk mendukung digitalisasi pencatatan dan pengelolaan operasional UMKM.

## Teknologi yang Digunakan

- HTML5, CSS3, JavaScript (Semantik dan Responsif)
- PHP 8.4
- Version Control: Git & GitHub
- Local Environment: Laragon 5

## Cara Menjalankan Proyek

1. Pastikan **Laragon 5** sudah terinstal dan berjalan (klik _Start All_ untuk Apache/MySQL).
2. Pastikan versi PHP yang aktif di Laragon adalah **PHP 8.4**.
3. _Clone_ atau letakkan repository ini ke dalam folder _document root_ Laragon di direktori: `C:\laragon\www\pemweb-obe`
4. Buka browser modern pilihan Anda (Chrome/Firefox/Edge).
5. Akses antarmuka proyek melalui URL lokal berikut: [http://localhost/pemweb-obe/](http://localhost/pemweb-obe/)

## Fitur yang Sudah Selesai (Modul 2)

- Halaman utama dengan struktur HTML5 semantik (header, nav, main, section, article, footer).
- Implementasi aksesibilitas dasar (alt text informatif, hierarchy heading h1-h3).
- Form audisi band lokal dengan struktur form dan label yang saling terkait.
- Navigasi logis yang dapat diakses penuh melalui keyboard.

## Fitur yang Sudah Selesai (Modul 3)

- Rebranding proyek menjadi "Tarakota Skena" dengan penerapan palet warna _retro-pop_ (Custom Properties CSS).
- Implementasi layout CSS modern menggunakan Flexbox (untuk navigasi sejajar) dan CSS Grid (untuk kartu _line-up_).
- Desain responsif menggunakan pendekatan _Mobile-First_, unit relatif (`clamp()`), dan _Media Query_.
- Peningkatan aksesibilitas visual dengan kontras warna yang aman dan penambahan indikator `focus-visible` pada elemen interaktif.

## Fitur yang Sudah Selesai (Modul 4)

- **Pengolahan Data (Array Methods):** Menggunakan fitur JavaScript modern (ES6+) seperti `filter`, `map`, `reduce`, dan `find` untuk memanipulasi _Array of Objects_ data pendaftar band.
- **Modularitas (ES Modules):** Memisahkan logika JavaScript ke dalam beberapa file (`utils.js` dan `app.js`) menggunakan sintaks `export` dan `import` agar kode lebih terstruktur.
- **Error Handling Dasar:** Menerapkan blok `try...catch` dan pelemparan error manual untuk mencegah aplikasi berhenti tiba-tiba jika tipe data tidak sesuai.

## Fitur yang Sudah Selesai (Modul 5)

- **Dynamic Rendering (Safe DOM):** Menerapkan pembaruan elemen antarmuka secara dinamis menggunakan `createElement` dan `textContent` untuk mencegah celah keamanan XSS.
- **Real-time Search & Filter:** Implementasi fitur pencarian dan filter _state_ data pendaftar band menggunakan _Event Listener_ (`input` dan `click`).
- **Event Delegation:** Mengganti _alert_ bawaan browser menjadi _toggle_ detail (_expand/collapse_) di dalam _card_ menggunakan delegasi _event_ pada kontainer utama.
- **Web Storage:** Menggunakan `localStorage` untuk menyimpan preferensi jumlah limit _card_ yang dirender dan tema visual (Dark/Light mode) secara permanen di sisi klien.
