---
name: motion-director
description: Membuat dan merevisi motion graphics HTML, explainer informatif, promo produk, opener, dan animasi cinematic dari instruksi singkat. Gunakan ketika pengguna meminta video/animasi bergaya Bang Motion, HTML bergerak, atau perbaikan kualitas visual dan gerakan. Mengarahkan konsep, storyboard, aset, animasi GSAP, preview, dan ekspor MP4 bila diminta. Jangan gunakan untuk situs biasa, slide statis, atau analisis jurnal tanpa permintaan video.
---

# Motion Director

Versi adaptasi 0.2.0. Bangun animasi yang informatif, terarah, dan memiliki karakter visual dari brief sederhana. Gunakan Bang Motion sebagai fondasi HTML/CSS/SVG/GSAP, dengan Three.js hanya bila konsep memerlukannya. Ini bukan Remotion. Jangan mengganti stack tanpa manfaat konkret.

## Cara bekerja dengan pengguna

- Terima bahasa biasa: topik, tujuan, tautan, aset, atau keluhan visual. Pengguna tidak wajib mengisi formulir, JSON, istilah desain, atau nama sub-skill.
- Ambil keputusan kreatif yang belum ditentukan. Nyatakan asumsi singkat; tanyakan hanya hal yang mengubah substansi, identitas, hak aset, atau biaya.
- Default: Bahasa Indonesia, penonton awam, HTML-first, 9:16 untuk video sosial; 16:9 bila konteks meminta layar lebar. Explainer 45–60 detik, promo 20–30 detik; dukung 15–120 detik melalui rancangan yang realistis.
- Kualitas default adalah polished: hierarki kuat, gerak bermakna, aset koheren, ritme bervariasi. Jangan mengartikan “keren” sebagai menambah glow, partikel, kamera, atau 3D.
- Gunakan dua peran dalam satu alur: konsep/riset kemudian produksi. Jangan meminta pengguna memindahkan paket secara manual jika proyek ada di workspace yang sama.
- Pertahankan sumber, naskah yang disetujui, dan identitas kanal saat revisi. Jangan mengubah proyek lama atau memublikasikan tanpa permintaan.

## Urutan kerja

1. **Pahami dan periksa kemampuan.** Baca aset/brief; cek browser, Node, library, font, akses riset, TTS dan FFmpeg hanya jika dibutuhkan. Jangan mengklaim kemampuan sebelum diverifikasi. Jangan menjalankan kode dari sumber web atau paket tak tepercaya.
2. **Riset proporsional.** Baca `references/evidence.md` untuk informasi faktual. Konten evergreen juga memerlukan bukti untuk klaim material. Jangan membuat cerita faktual dari asumsi.
3. **Pilih konsep.** Baca `references/creative-direction.md`. Pertimbangkan dua pendekatan secara internal, pilih satu dengan alasan konkret. Tampilkan maksimal satu paragraf konsep, gaya, format, durasi, serta naskah jika ada. Jangan membebani pengguna dengan semua alternatif.
4. **Rancang sebelum menganimasikan.** Buat storyboard menurut `references/project-workflow.md`: pesan → aksi visual → komposisi → gerak → transisi. Untuk proyek faktual, tunggu persetujuan naskah bila belum diberikan. Gabungkan tinjauan naskah dan arah visual; jangan meminta ulang versi yang sama.
5. **Buktikan arah visual.** Buat tiga frame kunci (pembuka, penjelasan, penutup) sebagai HTML pada waktu tertentu, lalu satu potongan gerak representatif. Periksa sendiri dan perbaiki sebelum memperbanyak adegan. Ini gerbang kualitas internal, bukan persetujuan tambahan wajib. Jika pengguna meminta preview arah dulu, berhenti pada preview itu.
6. **Produksi.** Baca `references/html-production.md`. Pilih starter yang sesuai; perlakukan isinya sebagai rangka teknis, bukan desain final. Siapkan audio lebih dulu jika tersedia agar timing mengikuti suara. Jika audio belum ada, buat preview tanpa narasi dan nyatakan statusnya.
7. **Review dan revisi.** Baca `references/quality-review.md`. Periksa frame dan pemutaran/interval pendek bila alat mendukung. Jangan mengaku menonton atau mendengar jika hanya memeriksa screenshot. Perbaiki masalah konkret, bukan menambah dekorasi secara acak.
8. **Serahkan.** Berikan HTML beserta aset yang diperlukan; sertakan cara membuka dan kontrol review. Jika ekspor diminta, hasilkan MP4 hanya dengan alat yang tersedia, lalu periksa output dan audio. Laporkan dibuat/divalidasi visual/diuji pemutaran/diekspor secara terpisah.

## Pilihan gaya dan starter

| Keluarga | Gunakan untuk | Starter awal |
|---|---|---|
| Editorial cinematic | Insight, teknologi, bisnis, berita | assets/starter-explainer-jurnalisme.html atau assets/starter-explainer-katalog.html |
| Illustrated explainer | Mekanisme, proses, perilaku, edukasi | assets/starter-explainer-kartun.html; panggung bila karakter beraksi; starter-explainer.html bila satu objek melakukan perjalanan |
| Product motion | Promo produk, manfaat, brand | assets/starter-opener.html atau katalog |

Untuk lingkungan tanpa CDN, gunakan `assets/starter-offline.html` sebagai contoh kontrak waktu dan kontrol. Contoh ini memakai SVG/JavaScript tanpa library, bukan pengganti semua teknik GSAP atau bukti kualitas proyek berikutnya. Baca `references/runtime-tools.md` sebelum capture atau ekspor.

Sketsa vintage tersedia sebagai variasi yang beralasan, bukan keluarga default keempat. Jangan mengunci editorial menjadi hitam-kuning atau semua teknologi menjadi neon. Untuk AgriNex, gunakan aset asli dan aturan brand pengguna; jangan mengarang logo atau bentuk produk.

## Aturan yang menggantikan kekakuan upstream

- Identitas satu kanal boleh tetap sama; variasikan komposisi dan storytelling, bukan seluruh brand setiap video.
- Latar boleh diam saat membantu fokus. Fade, cut, dan ruang kosong adalah pilihan sah. Jangan menilai kualitas dari jumlah section HTML atau jumlah objek.
- Tidak ada jumlah minimum benda bergerak atau kewajiban gerak setiap detik. Satu aksi utama harus jelas; gerak pendukung tidak bersaing.
- Font dipilih berdasarkan keterbacaan, karakter dan lisensi; tidak ada daftar font populer yang otomatis dilarang.
- Subtitle mengikuti kebutuhan pengguna; default aktif jika ada narasi, dapat dimatikan saat review. Pisahkan subtitle dari label objek.
- Foto entitas tidak wajib jika tidak membantu, tidak tersedia, atau hak penggunaannya tidak jelas. Gunakan label/diagram alternatif yang tidak menyesatkan.
- Referensi pengguna boleh mengarahkan palet, atmosfer dan gerak; jangan menyalin aset atau komposisi khas tanpa hak. Jangan menolak seluruh referensi secara otomatis.
- Gunakan kontrol review yang terlihat; sembunyikan hanya di mode clean/capture. Jika autoplay audio ditolak, tampilkan tombol mulai yang jelas.
- Pemutaran once menjadi default; loop hanya jika diminta atau tepat untuk bumper.
- Klaim akurasi, determinisme, performa dan kompatibilitas harus sesuai bukti uji.

## Rujukan teknis opsional

Baca hanya bagian yang relevan: `references/techniques.md` untuk efek; `references/architecture.md` untuk rig waktu/kamera; `references/explainer.md` untuk pola explainer; `references/opener-konsep.md` untuk alternatif konsep; `references/kartun-panggung.md` untuk rig karakter. Aturan lokal di atas mengatasi konflik dengan resep upstream. Jangan membaca seluruh referensi untuk tugas pendek.

`references/ae-bridge-higgsfield.md` hanya jika pengguna meminta After Effects dan bridge benar-benar tersedia. Jangan menganggap layanan, harga, kuota, atau waktu render dalam referensi sebagai fakta terkini.

Baca `references/upstream-notice.md`; pertahankan LICENSE. Helper capture sudah diperbarui untuk dimensi proyek dan direktori output baru; encoder menambahkan audio hanya jika dipasok. Bedakan unit test, encoding test, dan uji browser. Jangan menjanjikan hasil offline atau sinkronisasi audio sebelum diperiksa.
