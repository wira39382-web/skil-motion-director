# Audit dan penguatan 0.2.0

## Masalah dan perubahan

| Masalah | Perubahan | Batas |
|---|---|---|
| Instruksi upstream berbenturan dengan adaptasi | Prioritas eksplisit di SKILL.md dan setiap referensi upstream | Perlu evaluasi pada proyek nyata |
| “Keren” tidak diterjemahkan menjadi keputusan | Visual thesis, direction card, focal subject, ritme, gerbang keyframe | Tidak menjamin kualitas artistik otomatis |
| Capture hardcoded 1920x1080 | Ukuran diambil dari kontrak OPENER, termasuk portrait | Browser belum tersedia untuk uji visual |
| PNG diklaim sebagai ekspor lengkap | Encoder FFmpeg terpisah dengan metadata check | Suara dan sinkronisasi harus ditinjau |
| Potensi frame sisa mencemari render | Folder frame wajib kosong | Retry memerlukan folder versi baru |
| Audio panjang berpotensi terpotong | Refuse sebelum encode, bukan potong narasi | Codec tolerance kecil; cek playback |
| Autoplay/loop/controls membingungkan | Aturan once, kontrol jelas, clean mode; studi offline menerapkannya | Starter upstream perlu adaptasi per proyek |
| Jaringan bisa memblokir CDN | Studi offline tanpa dependensi dan aturan audit jaringan | Starter upstream tidak otomatis offline |
| Tidak ada evaluasi yang bisa diulang | 9 tes otomatis dan contoh forward test | Logika contoh diuji dengan DOM tiruan, bukan browser |

## Bukti uji lokal

- Node v24.19.0; FFmpeg/FFprobe tersedia.
- `node --test tests/*.test.mjs`: 9 lulus, 0 gagal, 0 dilewati.
- Validator skill: lulus; metadata UI dibuat dengan generator skill-creator.
- Capture browser dicoba: gagal karena executable Chromium/headless shell tidak tersedia. Tidak ada screenshot baru yang diklaim telah diperiksa.
- Encoding diuji menggunakan frame warna dan nada sintetis, bukan hasil capture animasi. Video tanpa suara dan dengan AAC lolos pemeriksaan metadata. Audio melebihi durasi dan output yang sudah ada ditolak.
- Forward test: permintaan promo merek fiktif tanpa bukti fitur menghasilkan rencana berlabel konseptual tanpa klaim efisiensi/otomatisasi yang dikarang. Ini evaluasi perencanaan, bukan uji pemanggilan skill terpasang.

## Langkah berikutnya

1. Sediakan browser yang kompatibel di lingkungan kerja.
2. Capture studi offline pada 1, 4, 8, 11.9 detik; periksa tiga frame kunci dan transisi.
3. Buat satu motion 20–30 detik dari brief nyata, review visual serta ritme bersama pengguna.
4. Sesuaikan preset dari feedback hasil itu sebelum memperluas ke 60–120 detik.
5. Bila dependency dipasang, hasilkan dan commit lockfile; jangan mengklaim reproducibility instalasi hanya dari versi package.json.

Tidak ada publikasi video, akun berbayar, TTS, atau koneksi After Effects yang dibuat.


## Audit revisi 0.3.0 — 22 Oktober 2026

- Gabungkan panduan gerak, audio, dan elemen visual terbaru dari skill terpasang ke repo; pertahankan alat capture/encoding dan tes yang sudah ada.
- Tambahkan visual-assets.md, motion-choreography.md, dan audio-production.md sebagai rujukan langsung dari SKILL.md.
- Hilangkan penurunan diam-diam ke video tanpa suara: default explainer bernarasi, capability check di awal, dan status pratinjau bila narasi belum tersedia.
- Perjelas konstruksi objek utama, changed states, konsistensi medium/detail, variasi komposisi, kontinuitas, serta review close-up dan ukuran ponsel.
- Betulkan petunjuk ekspor lama yang masih menyebut dimensi hardcoded; repo sudah mempunyai alat capture berbasis W/H proyek. Tidak mengubah implementasi alat pada revisi ini.
- Bedakan jam pemutaran berbasis audio dari seek langsung saat capture; dokumentasikan kebutuhan menunggu media selesai seeking/decoding.
- Bedakan headline/label ringkas dari subtitle lengkap agar aturan tidak bertentangan dengan aksesibilitas.
- Selaraskan README dan metadata contoh prompt. Tidak menghapus starter, lisensi, atau alat yang sudah ada.
- Uji brief terpisah memeriksa keputusan perencanaan, bukan mutu film. Validasi struktur/resource dan tes teknis dijalankan ulang; bukti pemutaran browser serta pendengaran narasi nyata tetap belum tersedia.
