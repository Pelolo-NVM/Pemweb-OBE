// js/app.js

// Menggunakan 'import' untuk memanggil fungsi dari file utils.js
import { ringkasDataAudisi } from './utils.js';

// Menggunakan 'const' untuk mendeklarasikan array data
const pendaftarBand = [
    { id: 1, nama: 'The Lantis', genre: 'Indie Pop', asal: 'Tarakan', anggota: 4, status: 'Lolos' },
    { id: 2, nama: 'Senja Kelabu', genre: 'Folk', asal: 'Tanjung Selor', anggota: 3, status: 'Audisi' },
    { id: 3, nama: 'Distorsi Utara', genre: 'Rock', asal: 'Tarakan', anggota: 5, status: 'Lolos' },
    { id: 4, nama: 'Melodi Pesisir', genre: 'Acoustic', asal: 'Nunukan', anggota: 2, status: 'Ditolak' }
];

console.log("=== PENGOLAHAN DATA AUDISI TARAKOTA SKENA ===");

// 1. Array.filter(): Mengambil band dengan status 'Lolos'
const bandLolos = pendaftarBand.filter(band => band.status === 'Lolos');
console.log("1. Band yang Lolos Kurasi:");
console.table(bandLolos); // <-- Ubah ke table

// 2. Array.map(): Menghasilkan array yang hanya berisi nama-nama band
const namaBand = pendaftarBand.map(({ nama }) => nama);
console.log("2. Daftar Nama Band Pendaftar:");
console.table(namaBand); // <-- Ubah ke table

// 3. Array.reduce(): Menghitung total semua personil (Tetap pakai log karena cuma 1 angka)
const totalPersonil = pendaftarBand.reduce((total, band) => total + band.anggota, 0);
console.log("3. Total Personil Musisi Terdaftar: " + totalPersonil + " orang");

// 4. LATIHAN 1 - Filter berdasarkan lokasi (Asal: Tarakan)
const bandLokalTarakan = pendaftarBand.filter(band => band.asal === 'Tarakan');
console.log("4. Band asal Tarakan:");
console.table(bandLokalTarakan); // <-- Ubah ke table

// 5. LATIHAN 2 - Array.find(): Mencari spesifik band berdasarkan ID
const cariBandId3 = pendaftarBand.find(band => band.id === 3);
console.log("5. Pencarian Band ID 3:");
console.table(cariBandId3); // <-- Ubah ke table

// 6. LATIHAN 3 - Template Literal & Destructuring (Tetap log karena ini kalimat baris per baris)
console.log("6. Ringkasan Profil Band:");
pendaftarBand.forEach(({ nama, genre, asal }) => {
    console.log(`- ${nama} adalah band beraliran ${genre} yang berasal dari kota ${asal}.`);
});

// 7. Implementasi Module & Error Handling Dasar (try...catch)
console.log("7. Statistik Ringkasan (Dari Module utils.js):");
try {
    const statistik = ringkasDataAudisi(pendaftarBand);
    console.table(statistik); // <-- Ubah ke table
} catch (error) {
    console.error("Gagal memuat statistik:", error.message);
}