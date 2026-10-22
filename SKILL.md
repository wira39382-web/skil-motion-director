---
name: motion-director
description: Membuat dan merevisi motion graphics HTML, explainer informatif, promo produk, opener, dan animasi cinematic dari instruksi singkat. Gunakan ketika pengguna meminta video/animasi bergaya Bang Motion, HTML bergerak, atau perbaikan kualitas visual dan gerakan. Mengarahkan konsep, art direction, koreografi GSAP yang mengalir, narasi suara, sound design, preview, dan ekspor MP4 bila diminta. Jangan gunakan untuk situs biasa, slide statis, atau analisis jurnal tanpa permintaan video.
---

# Motion Director

Bangun animasi yang informatif, terarah, dan memiliki karakter visual dari brief sederhana. Gunakan Bang Motion sebagai fondasi HTML/CSS/SVG/GSAP, dengan Three.js hanya bila konsep memerlukannya. Ini bukan Remotion. Jangan mengganti stack tanpa manfaat konkret.

## Cara bekerja dengan pengguna

- Terima bahasa biasa: topik, tujuan, tautan, aset, atau keluhan visual. Pengguna tidak wajib mengisi formulir, JSON, istilah desain, atau nama sub-skill.
- Ambil keputusan kreatif yang belum ditentukan. Nyatakan asumsi singkat; tanyakan hanya hal yang mengubah substansi, identitas, hak aset, atau biaya.
- Default: Bahasa Indonesia, penonton awam, HTML-first, 9:16 untuk video sosial; 16:9 bila konteks meminta layar lebar. Explainer 45–60 detik, promo 20–30 detik; dukung 15–120 detik melalui rancangan yang realistis.
- Target default adalah film motion yang mengalir dan menarik, bukan slide yang diberi animasi. Wujudkan melalui objek yang berubah/berinteraksi, kesinambungan antarbeat, komposisi yang bervariasi, dan suara yang mendukung cerita. Jangan menyamakan premium dengan warna gelap, huruf besar, glow, atau banyak efek.
- Untuk explainer, gunakan narasi Bahasa Indonesia sebagai default; tambahkan musik latar/SFX secara terarah bila aset dan izin tersedia. Periksa kemampuan audio di awal. Jangan menganggap permintaan HTML berarti pengguna mengizinkan hasil tanpa suara. Baca `references/audio-production.md`.
- Gunakan dua peran dalam satu alur: konsep/riset kemudian produksi. Jangan meminta pengguna memindahkan paket secara manual jika proyek ada di workspace yang sama.
- Pertahankan sumber, naskah yang disetujui, dan identitas kanal saat revisi. Jangan mengubah proyek lama atau memublikasikan tanpa permintaan.

## Arah visual pilihan pengguna

Untuk insight, teknologi, bisnis dan berita, pertahankan editorial modern yang dipilih pengguna: karakter versi pertama, elemen isometrik yang lebih matang, tempo cepat dan banyak variasi komposisi. Baca `references/approved-editorial-direction.md` dan gunakan `assets/benchmarks/editorial-ai-45s.html` sebagai acuan konkret. Jangan mengganti keluarga visual menjadi kartun ketika pengguna hanya meminta lebih modern atau lebih halus. Instruksi baru dan identitas brand yang diberikan tetap diutamakan. Persetujuan arah visual tidak menghapus kebutuhan narasi rekaman dan pengujian pemutaran.

## Urutan kerja

1. **Pahami dan periksa kemampuan.** Baca aset/brief; cek browser, Node, library, font dan akses riset; cek TTS/pemutaran audio untuk explainer, serta FFmpeg bila perlu pengukuran atau ekspor. Jangan mengklaim kemampuan sebelum diverifikasi. Jangan menjalankan kode dari sumber web atau paket tak tepercaya.
2. **Riset proporsional.** Baca `references/evidence.md` untuk informasi faktual. Konten evergreen juga memerlukan bukti untuk klaim material. Jangan membuat cerita faktual dari asumsi.
3. **Pilih konsep dan rancang elemennya.** Baca `references/creative-direction.md` dan `references/visual-assets.md`. Pertimbangkan dua pendekatan secara internal, pilih satu dengan alasan konkret. Tentukan objek utama, medium, bahasa bentuk, detail/material yang relevan, serta bagian yang berubah atau berinteraksi. Tampilkan maksimal satu paragraf konsep, gaya, format, durasi, serta naskah jika ada. Jangan membebani pengguna dengan semua alternatif.
4. **Rancang sebelum menganimasikan.** Buat storyboard menurut `references/project-workflow.md`: pesan → aksi visual → komposisi → gerak → transisi. Tampilkan ringkasan konsep/naskah dan batas bukti sebelum produksi. Jika pengguna sudah meminta pembuatan langsung dan menyerahkan keputusan kreatif, lanjutkan dengan fakta terverifikasi; jangan menambah persetujuan rutin. Minta keputusan hanya bila substansi, akses, biaya atau hak aset benar-benar belum jelas.
5. **Buktikan desain dan gerak.** Baca `references/motion-choreography.md`. Buat tiga frame kunci (pembuka, penjelasan, penutup) dan satu potongan 6–10 detik yang memuat aksi utama, transisi, serta contoh suara bila tersedia. Sertakan objek utama pada crop dekat dan komposisi ukuran ponsel untuk memeriksa bentuk, detail, konsistensi dan keterbacaannya. Perbaiki objek yang belum matang sebelum mengulangnya di banyak adegan. Tiga frame harus menunjukkan variasi komposisi; potongan harus membuktikan gerak, bukan hanya fade judul. Ini gerbang kualitas internal, bukan permintaan persetujuan tambahan. Jika alat review terblokir, laporkan status belum diperiksa, jangan mengakali blokir atau mengklaim lulus.
6. **Produksi.** Baca `references/html-production.md`. Pilih starter yang sesuai; perlakukan isinya sebagai rangka teknis, bukan desain final. Produksi dan ukur narasi sebelum mengunci timing; koreografikan adegan mengikuti frasa, jeda, dan penekanan. Jika audio tidak dapat dibuat, selesaikan naskah, cue suara, dan animatic yang berguna, tetapi tandai pratinjau belum lengkap dan jelaskan kebutuhan konkret untuk menyelesaikannya. Jangan diam-diam menurunkan standar ke video bisu.
7. **Review dan revisi.** Baca `references/quality-review.md`. Periksa frame, pemutaran pada kecepatan normal, transisi dan suara bila alat mendukung. Sintaks, screenshot, dan pemutaran adalah bukti yang berbeda. Jangan mengaku menonton atau mendengar jika hanya memeriksa kode/screenshot. Perbaiki masalah konkret, bukan menambah dekorasi secara acak.
8. **Serahkan.** Berikan HTML beserta aset yang diperlukan; sertakan cara membuka dan kontrol review. Jika ekspor diminta, hasilkan MP4 hanya dengan alat yang tersedia, lalu periksa output dan audio. Laporkan dibuat/divalidasi visual/diuji pemutaran/diuji audio/diekspor secara terpisah. Sebut pratinjau bila suara default masih hilang atau pemeriksaan gerak belum dilakukan; jangan menyebutnya final tervalidasi.

## Pilihan gaya dan starter

| Keluarga | Gunakan untuk | Starter awal |
|---|---|---|
| Editorial cinematic | Insight, teknologi, bisnis, berita | assets/starter-explainer-jurnalisme.html atau assets/starter-explainer-katalog.html |
| Illustrated explainer | Mekanisme, proses, perilaku, edukasi | assets/starter-explainer-kartun.html; panggung bila karakter beraksi; starter-explainer.html bila satu objek melakukan perjalanan |
| Product motion | Promo produk, manfaat, brand | assets/starter-opener.html atau katalog |

Untuk lingkungan tanpa CDN, gunakan `assets/starter-offline.html` sebagai studi kontrak waktu dan kontrol yang sengaja tanpa suara, bukan template hasil akhir. Ganti arah visual dan siapkan narasi sesuai brief. Baca `references/runtime-tools.md` sebelum capture atau ekspor.

Sketsa vintage tersedia sebagai variasi yang beralasan, bukan keluarga default keempat. Jangan mengunci editorial menjadi hitam-kuning atau semua teknologi menjadi neon. Untuk AgriNex, gunakan aset asli dan aturan brand pengguna; jangan mengarang logo atau bentuk produk.

## Aturan yang menggantikan kekakuan upstream

- Identitas satu kanal boleh tetap sama; variasikan komposisi dan storytelling, bukan seluruh brand setiap video.
- Latar boleh diam saat membantu fokus. Fade, cut, dan ruang kosong adalah pilihan sah. Jangan menilai kualitas dari jumlah section HTML atau jumlah objek.
- Tidak ada jumlah minimum benda bergerak atau kewajiban gerak setiap detik. Satu aksi utama harus jelas; gerak pendukung tidak bersaing. Hindari mengulang resep judul masuk → objek masuk → diam → cut pada seluruh film; tahan frame untuk membaca dengan alasan, bukan karena kehabisan aksi visual.
- Font dipilih berdasarkan keterbacaan, karakter dan lisensi; tidak ada daftar font populer yang otomatis dilarang.
- Subtitle mengikuti kebutuhan pengguna; default aktif jika ada narasi, dapat dimatikan saat review. Pisahkan subtitle dari label objek.
- Foto entitas tidak wajib jika tidak membantu, tidak tersedia, atau hak penggunaannya tidak jelas. Gunakan label/diagram alternatif yang tidak menyesatkan.
- Referensi pengguna boleh mengarahkan palet, atmosfer dan gerak; jangan menyalin aset atau komposisi khas tanpa hak. Jangan menolak seluruh referensi secara otomatis.
- Gunakan kontrol review yang terlihat; sembunyikan hanya di mode clean/capture. Jika autoplay audio ditolak, tampilkan tombol mulai yang jelas.
- Pemutaran once menjadi default; loop hanya jika diminta atau tepat untuk bumper.
- Klaim akurasi, determinisme, performa dan kompatibilitas harus sesuai bukti uji.

## Kriteria selesai

- Cerita dapat dipahami dari aksi visual dan suara; judul dan label menegaskan pesan secara ringkas; subtitle boleh memuat seluruh narasi untuk aksesibilitas.
- Objek utama punya bentuk, detail dan perilaku yang sesuai topik; aset, tipografi dan lingkungan menggunakan satu bahasa visual yang koheren. Pilih vector/ilustrasi/foto/2.5D/3D berdasarkan manfaat, bukan anggapan bahwa semakin kompleks semakin profesional.
- Transisi mempertahankan arah perhatian; variasi tempo/komposisi terasa sebagai satu film.
- Narasi terdengar dan sinkron, atau hasil dinyatakan pratinjau belum lengkap dengan kendala spesifik. Diam hanya menjadi mode final jika pengguna memang memintanya.
- Tidak ada teks terpotong, kedipan saat seek, atau pergantian adegan yang melompat tanpa sengaja pada pengujian yang benar-benar dijalankan.
- Klaim kualitas dibatasi oleh bukti pemeriksaan. Jangan menjanjikan hasil profesional hanya karena skill diperbarui.

## Rujukan teknis opsional

Baca hanya bagian yang relevan: `references/techniques.md` untuk efek; `references/architecture.md` untuk rig waktu/kamera; `references/explainer.md` untuk pola explainer; `references/opener-konsep.md` untuk alternatif konsep; `references/kartun-panggung.md` untuk rig karakter. Aturan lokal di atas mengatasi konflik dengan resep upstream. Jangan membaca seluruh referensi untuk tugas pendek.

`references/ae-bridge-higgsfield.md` hanya jika pengguna meminta After Effects dan bridge benar-benar tersedia. Jangan menganggap layanan, harga, kuota, atau waktu render dalam referensi sebagai fakta terkini.

Baca `references/upstream-notice.md`; pertahankan LICENSE. Helper capture mengambil dimensi dari kontrak OPENER dan memerlukan direktori output baru; encoder menambahkan audio hanya jika track nyata dipasok. Bedakan unit test, encoding test, uji browser, dan pemeriksaan pendengaran. Jangan menjanjikan hasil offline atau sinkronisasi audio sebelum diperiksa.
