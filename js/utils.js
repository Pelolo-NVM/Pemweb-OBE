// js/utils.js

// Menggunakan 'export' agar fungsi ini bisa dipanggil di file lain
export function ringkasDataAudisi(data) {
    // Validasi input: Error Handling dasar menggunakan try...catch throw
    if (!Array.isArray(data)) {
        throw new TypeError('Data harus berupa array!');
    }

    // Mengembalikan objek statistik menggunakan fitur array ES6
    return {
        totalPendaftar: data.length,
        // reduce: menghitung total personil musisi yang akan datang ke venue
        totalMusisi: data.reduce((sum, band) => sum + band.anggota, 0),
        // filter: menghitung berapa band yang statusnya lolos
        lolosKurasi: data.filter(band => band.status === 'Lolos').length
    };
}