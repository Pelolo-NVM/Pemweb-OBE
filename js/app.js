// js/app.js
import { ringkasDataAudisi } from './utils.js';

// ==========================================
// DATA UTAMA & LOGIKA MODUL 4
// ==========================================
const pendaftarBand = [
    { id: 1, nama: 'The Lantis', genre: 'Indie Pop', asal: 'Tarakan', anggota: 4, status: 'Lolos' },
    { id: 2, nama: 'Senja Kelabu', genre: 'Folk', asal: 'Tanjung Selor', anggota: 3, status: 'Audisi' },
    { id: 3, nama: 'Distorsi Utara', genre: 'Rock', asal: 'Tarakan', anggota: 5, status: 'Audisi' },
    { id: 4, nama: 'Melodi Pesisir', genre: 'Acoustic', asal: 'Nunukan', anggota: 2, status: 'Ditolak' },
    { id: 5, nama: 'Sunset Orange', genre: 'Pop Rock', asal: 'Tarakan', anggota: 4, status: 'Lolos' },
    { id: 6, nama: 'Cahaya Malam', genre: 'Pop Rock', asal: 'Tanjung Selor', anggota: 5, status: 'Audisi' },
    { id: 7, nama: 'Ombak Biru', genre: 'Pop Rock', asal: 'Nunukan', anggota: 6, status: 'Lolos' },
    { id: 8, nama: 'Gema Nada', genre: 'Pop Rock', asal: 'Bunyu', anggota: 3, status: 'Lolos' },
    { id: 9, nama: 'Langkah Pasti', genre: 'Pop Rock', asal: 'Tanjung Selor', anggota: 4, status: 'Audisi' },
    { id: 10, nama: 'Hening Senja', genre: 'Pop Rock', asal: 'Tarakan', anggota: 5, status: 'Ditolak' }
];

console.log("=== PENGOLAHAN DATA AUDISI TARAKOTA SKENA (MODUL 4) ===");

const bandLolos = pendaftarBand.filter(band => band.status === 'Lolos');
console.log("1. Band yang Lolos Kurasi:");
console.table(bandLolos);

const namaBand = pendaftarBand.map(({ nama }) => nama);
console.log("2. Daftar Nama Band Pendaftar:");
console.table(namaBand);

const totalPersonil = pendaftarBand.reduce((total, band) => total + band.anggota, 0);
console.log("3. Total Personil Musisi Terdaftar: " + totalPersonil + " orang");

const bandLokalTarakan = pendaftarBand.filter(band => band.asal === 'Tarakan');
console.log("4. Band asal Tarakan:");
console.table(bandLokalTarakan);

const cariBandId3 = pendaftarBand.find(band => band.id === 3);
console.log("5. Pencarian Band ID 3:");
console.table(cariBandId3);

console.log("6. Ringkasan Profil Band:");
pendaftarBand.forEach(({ nama, genre, asal }) => {
    console.log(`- ${nama} adalah band beraliran ${genre} yang berasal dari kota ${asal}.`);
});

console.log("7. Statistik Ringkasan (Dari Module utils.js):");
try {
    const statistik = ringkasDataAudisi(pendaftarBand);
    console.table(statistik);
} catch (error) {
    console.error("Gagal memuat statistik:", error.message);
}


// ==========================================
// LOGIKA DOM, EVENT, & STORAGE MODUL 5
// ==========================================
console.log("=== RENDER DOM & EVENT TARAKOTA SKENA (MODUL 5) ===");

console.log("=== CEK KONEKSI DOM ===");
console.log("Container:", document.querySelector('#daftar-band'));
console.log("Input Search:", document.querySelector('#search'));
console.log("Select Limit:", document.querySelector('#limit'));
console.log("Tombol Tema:", document.querySelector('#theme-button'));

// 1. Seleksi DOM
const containerBand = document.querySelector('#daftar-band');
const tombolFilter = document.querySelectorAll('[data-filter]');
const searchInput = document.querySelector('#search');
const limitSelect = document.querySelector('#limit');
const themeButton = document.querySelector('#theme-button');

// 2. Fungsi Render DOM (Safe Update dengan createElement)
function renderBands(bands) {
    containerBand.replaceChildren(); 
    
    const batas = Number(limitSelect.value);
    const dataDibatasi = bands.slice(0, batas);

    for (const band of dataDibatasi) {
        const article = document.createElement('article');
        article.className = 'card';

        const title = document.createElement('h3');
        title.textContent = band.nama;

        const info = document.createElement('p');
        info.textContent = `${band.genre} | ${band.asal}`;

        const btnDetail = document.createElement('button');
        btnDetail.type = 'button';
        btnDetail.textContent = 'Detail Profil';
        btnDetail.dataset.detail = band.id; 

        // --- TAMBAHAN: Container Detail (Disembunyikan dari awal) ---
        const detailContainer = document.createElement('div');
        detailContainer.className = 'detail-info';
        detailContainer.style.display = 'none'; // Sembunyikan
        detailContainer.style.marginTop = '1rem';
        detailContainer.style.paddingTop = '1rem';
        detailContainer.style.borderTop = '2px dashed var(--color-dark, #1A1A1A)';

        const detailAnggota = document.createElement('p');
        detailAnggota.textContent = `Jumlah Personil: ${band.anggota} Orang`;
        detailAnggota.style.margin = '0 0 0.5rem 0';

        const detailStatus = document.createElement('p');
        detailStatus.textContent = `Status Kurasi: ${band.status}`;
        detailStatus.style.margin = '0';

        detailContainer.append(detailAnggota, detailStatus);
        // -----------------------------------------------------------

        // Masukkan semua elemen ke dalam card (detailContainer ditaruh paling bawah)
        article.append(title, info, btnDetail, detailContainer);
        containerBand.append(article);
    }
}

// 3. Event Handling: Pencarian (Input)
searchInput.addEventListener('input', (event) => {
    const keyword = event.target.value.toLowerCase();
    const hasilCari = pendaftarBand.filter(band => 
        band.nama.toLowerCase().includes(keyword) || band.asal.toLowerCase().includes(keyword)
    );
    renderBands(hasilCari);
});

// 4. Event Handling: Tombol Filter Status
tombolFilter.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        const hasilFilter = filter === 'Semua' 
            ? pendaftarBand 
            : pendaftarBand.filter(band => band.status === filter);
        
        renderBands(hasilFilter);
    });
});

// 5. Event Delegation: Klik Tombol Detail di dalam Card
containerBand.addEventListener('click', (event) => {
    const button = event.target.closest('[data-detail]');
    if (!button) return; 

    // Cari elemen induk (.card) dari tombol yang diklik
    const card = button.closest('.card');
    // Cari kotak detail di dalam card tersebut
    const detailContainer = card.querySelector('.detail-info');

    // Logika Buka/Tutup (Toggle Display)
    if (detailContainer.style.display === 'none') {
        detailContainer.style.display = 'block'; // Tampilkan detail
        button.textContent = 'Tutup Detail';
        button.style.backgroundColor = 'var(--color-dark, #1A1A1A)'; // Gelapkan tombol
    } else {
        detailContainer.style.display = 'none'; // Sembunyikan lagi
        button.textContent = 'Detail Profil';
        button.style.backgroundColor = 'var(--color-magenta, #FF007F)'; // Kembalikan warna pink
    }
});

// 6. Web Storage: Limit Jumlah Band yang Tampil
limitSelect.value = localStorage.getItem('limit') ?? '10'; // Default 10 item jika belum ada storage

limitSelect.addEventListener('change', () => {
    localStorage.setItem('limit', limitSelect.value);
    renderBands(pendaftarBand);
});

// 7. Web Storage: Preferensi Tema
const savedTheme = localStorage.getItem('theme') ?? 'light';
document.documentElement.dataset.theme = savedTheme;

themeButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
});

// 8. Eksekusi Render Pertama Kali Saat Halaman Dimuat
renderBands(pendaftarBand);