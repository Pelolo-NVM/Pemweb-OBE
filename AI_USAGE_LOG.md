# AI Usage Log (Etika Penggunaan AI)

| Tanggal | Tujuan Penggunaan AI | Prompt Ringkas | Hasil Output AI | Verifikasi Mahasiswa | Keputusan Mahasiswa |

|---|---|---|---|---|---|

| 26 Agustus 2026 | Bantuan _troubleshooting_ error Git saat inisialisasi awal (_reinitialized_ error). | "bantu kerjain ini pada no 7 untuk gitnya seperti apa", "apa perintah yang benar kok di saya salah" | AI menjelaskan letak kesalahan _path_ folder di luar `pemweb-obe` dan memberikan urutan perintah `git init`, `add`, `commit`, dan konfigurasi global yang benar. | Mengeksekusi perintah di terminal Laragon pada _path_ yang tepat (`C:\laragon\www\Pemweb-obe`) dan mengecek status Git lokal. | Menerapkan langkah perbaikan yang diberikan hingga berhasil melakukan inisialisasi dan konfigurasi _author_. |

| 26 Agustus 2026 | Bantuan menyambungkan repository lokal ke GitHub. | "cara mengeksekusi ulang gimana dan langkah selanjutnya gimana" | AI memberikan panduan eksekusi ulang commit dan perintah `git remote add origin` serta `git push`. | Mencoba menjalankan perintah _remote add_, lalu memperbaiki kesalahan sintaks tanda `< >` pada URL sesuai petunjuk lanjutan AI. | Berhasil melakukan _push_ kode ke _remote repository_ GitHub utama. |

| 26 Agustus 2026 | Membuat draf file dokumentasi `README.md` dan `AI_USAGE_LOG.md` (Langkah 9 & 10). | "buatkan saya step 9 dan 10 dong" | AI menyusun draf dokumen Markdown yang mencakup identitas, teknologi, panduan _run_ Laragon, serta log penggunaan AI sebelumnya. | Membaca draf untuk memastikan format _Markdown_ (_table_, _heading_, _list_) dapat di-render dengan baik dan data yang digunakan sesuai. | Menyimpan konten ke dalam file `.md` lalu memasukkannya ke dalam _commit_ proyek. |

| 2 September 2026 | _Brainstorming_ ide proyek semester individu. | "bantu aku cari judul yang relevan untuk tugas project web saat ini" | AI menyarankan beberapa ide, saya memilih Sistem Manajemen EO Borneo Music Fest dan AI memetakan struktur HTML5-nya. | Membaca konsep dan memverifikasi apakah pemetaan struktur sesuai dengan kriteria Modul 2 (minimal 3 section, article, form). | Menerapkan struktur kode yang disarankan ke dalam `index.html`. |

| 15 September 2026 | Diskusi UI/UX, eksplorasi desain, dan penyusunan struktur CSS responsif Modul 3. | "bantu kelarin praktikum dari modul 3nya dong... pengen color palletnya seperti pesta pora" | AI menyarankan rebranding nama "Tarakota Skena", memetakan warna dari gambar referensi ke variabel CSS, dan menyusun kerangka layout Flexbox/Grid. | Membaca penjelasan logika layout, menyesuaikan posisi navigasi header, dan memilih font Fredoka One. |
Mengimplementasikan kode ke `styles.css`, menguji responsivitas di 3 ukuran layar (localhost), dan melakukan _push_ ke GitHub. |

| 16 September 2026 | Mengolah data pendaftar band dengan _Array Methods_ JS modern dan _ES Modules_ (Modul 4). | "sepertinya skenario 1 (pendaftar band) lebih menarik... kerjakan praktikumnya" | AI menyusun struktur _Array of Objects_ sesuai tema Tarakota Skena, merangkai logika `filter/map/reduce/find`, dan memberikan perbaikan visual log menggunakan `console.table()`. | Menguji hasil keluaran fungsi secara langsung di _Console_ browser (_localhost_) dan membaca alur kode agar siap dipertanggungjawabkan saat pengumpulan. |

| 23 September 2026 | Implementasi DOM dinamis, _Event Handling_, dan Web Storage untuk antarmuka manajemen audisi (Modul 5). | "fungsi tombolnya ngk berfungsi" / "bikin di detailnya muncul di cardsnya" | AI membantu menyusun struktur DOM yang aman (`createElement`), mengidentifikasi masalah _cache_ pada browser, dan merancang logika _Event Delegation_ untuk efek _toggle_ detail pada kartu. | Melakukan _Hard Refresh_ (Ctrl+F5) pada browser untuk menghapus _cache_, memastikan logika DOM tidak menggunakan `innerHTML`, dan menguji ketahanan Web Storage di _localhost_. |
