# Motion Director

Skill HTML-first untuk motion graphics, explainer, dan promo dari instruksi singkat. Adaptasi Bang Motion 1.19.0 oleh Bang Tutorial; ditambah pengarah kreatif, workflow riset, review visual, kontrol pemutaran, serta alat capture dan encoding yang diperbarui.

## Mulai dengan instruksi sederhana

Setelah lingkungan agent menemukan SKILL.md, gunakan:

> Gunakan $motion-director. Buat motion HTML 45 detik tentang [topik]. Pilih konsep visual yang kuat, buat mudah dipahami, dan tentukan arahan desainnya.

> Buat promo 25 detik untuk [produk] dari aset ini. Pertahankan bentuk produk dan identitas mereknya. Tanpa suara dulu.

> Revisi proyek ini agar lebih cinematic: perkuat framing dan ritme, pertahankan naskah dan warna.

Pengguna tidak perlu menyusun JSON. Skill memilih salah satu dari editorial cinematic, illustrated explainer, atau product motion; menulis konsep singkat; menyiapkan naskah/storyboard; membangun HTML; lalu memeriksa hasil. Naskah faktual memerlukan bukti dan persetujuan. Preview tanpa narasi diperbolehkan jika sesuai permintaan.

## Instalasi skill

Repository ini sendiri adalah folder skill: SKILL.md berada di root. Clone/download keseluruhan folder, bukan hanya SKILL.md, ke lokasi skill yang didukung agent Anda. Ikuti dokumentasi agent/versi yang digunakan dan periksa daftar skill setelah pemasangan. Repo ini belum membuktikan pemasangan maupun pemanggilan pada setiap versi Codex, Claude Code atau agent lain. agents/openai.yaml menyediakan metadata UI; tidak memasang skill otomatis.

## Pilihan output

- Utama: index.html dengan aset yang diperlukan; dapat ditinjau di browser.
- Contoh offline: buka assets/starter-offline.html. Ini studi visual 12 detik tanpa suara, menggunakan SVG/JavaScript, dengan play/pause, restart, dan scrub. Bukan video faktual dan bukan benchmark kualitas profesional.
- Starter GSAP/Three.js asli: masih mengandung placeholder dan dependensi CDN. Harus diadaptasi serta diperiksa sebelum penyerahan.
- Pilihan: MP4 melalui capture frame dan FFmpeg; audio harus diberikan secara eksplisit.

## Alat opsional

HTML offline tidak membutuhkan Node. Capture membutuhkan Node, Playwright, dan browser yang sesuai. Encoding membutuhkan FFmpeg/FFprobe. Versi Playwright pengembangan tercantum di package.json; tidak ada lockfile atau instalasi dependency yang diklaim telah selesai.

```sh
npm install
npx playwright install chromium
npm test
npm run doctor
node scripts/snap.mjs assets/starter-offline.html artifacts/review-v1 1 4 8 11.9
node scripts/export-frames.mjs assets/starter-offline.html artifacts/frames-v1 30
node scripts/encode.mjs artifacts/frames-v1 artifacts/demo-v1.mp4
```

Instal alat hanya bila diperlukan dan diizinkan lingkungan. Jangan mengatasi blokir proxy dengan cara yang melanggar kebijakan akses. Untuk audio, gunakan argumen ketiga encoder: narration.wav. Audio HTML tidak ikut direkam oleh screenshot. Lihat references/runtime-tools.md.

## Struktur

- SKILL.md: alur inti, prioritas instruksi, dan pemilihan referensi.
- references/creative-direction.md: keputusan konsep, visual thesis, komposisi, ritme, dan revisi.
- references/project-workflow.md: brief internal, versi, persetujuan, dan handoff.
- references/evidence.md: sumber, klaim, ilustrasi, dan lisensi aset.
- references/html-production.md: runtime, kontrol, timeline dan portabilitas.
- references/quality-review.md: gerbang kualitas dan batas klaim pengujian.
- references/runtime-tools.md: perintah alat yang berlaku sekarang.
- references/* lainnya: resep upstream dengan peringatan prioritas.
- assets/: tujuh starter upstream dan satu studi offline baru.
- scripts/: capture, doctor, encode, serta helper opsional upstream.
- tests/: uji input, timeline studi offline, dan encoding sintetis.

## Status pengujian

Sembilan pengujian otomatis lulus pada lingkungan pembuatan: input/dimensi, path dan output bersih, logika seek studi offline, encoding H.264, audio AAC, penolakan audio terlalu panjang dan file output yang sudah ada. Format skill dan referensi diperiksa. Uji contoh prompt menunjukkan perencanaan tanpa mengarang fitur produk.

**Belum lulus uji browser visual:** paket Playwright tersedia lewat runtime, tetapi binary Chromium tidak tersedia saat audit. Capture sudah dicoba dan gagal secara eksplisit dengan pesan browser tidak tersedia. Belum ada bukti visual/playback, sinkronisasi narasi nyata, atau render dua menit. Jangan menyamakan unit test logika DOM tiruan dengan uji browser.

Periksa docs/audit.md untuk batas dan langkah selanjutnya. Repo berisi sumber skill; kualitas setiap animasi masih harus dibuktikan melalui review dan revisi proyek nyata.

## Lisensi

Pertahankan LICENSE MIT dan atribusi Bang Tutorial pada bagian turunan. Perubahan Motion Director ditandai di references/upstream-notice.md. Periksa lisensi GSAP, Three.js, browser tools, font, foto dan aset lain secara terpisah sesuai penggunaan. Tidak ada klaim bahwa semua dependensi memiliki lisensi yang sama.
