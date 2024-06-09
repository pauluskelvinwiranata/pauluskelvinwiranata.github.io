+++
title = 'Pengenalan Dasar HTML Untuk Pemula'
date = 2024-04-05T14:06:05+07:00
draft = false
language = 'ID'
math = true
readTime = true
autonumber = true
toc = true
+++

## Pengenalan HTML

HTML (Hypertext Markup Language) adalah bahasa markup yang digunakan untuk membuat struktur dan konten halaman web. Ini adalah dasar dari hampir semua halaman web di internet.

## Struktur Dasar HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh Halaman Web</title>
  </head>
  <body>
    <h1>Selamat Datang di Blog HTML Dasar!</h1>
    <p>Ini adalah contoh paragraf dalam halaman web.</p>
  </body>
</html>
```

## Penjelasan Struktur Dasar HTML

| Struktur                                                             | Deskripsi                                                                                                                                                                                      |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<!DOCTYPE html>`                                                        | Deklarasi dokumen yang memberi tahu browser bahwa dokumen menggunakan versi HTML terbaru dan harus diinterpretasikan sebagai dokumen HTML.                                                     |
| `<html>`                                                                 | Elemen yang menandai awal dan akhir dari dokumen HTML. Semua konten dalam dokumen HTML ditempatkan di dalam elemen ini.                                                                        |
| `<head>`                                                                 | Bagian dari dokumen HTML yang berisi informasi tambahan tentang dokumen, seperti judul halaman, tautan ke berkas gaya (CSS), meta-data, dan informasi lainnya.                                 |
| `<meta charset="UTF-8">`                                                 | Elemen `<meta>` yang menentukan set karakter yang digunakan dalam dokumen. Dalam contoh ini, karakter yang digunakan adalah UTF-8, mendukung berbagai karakter bahasa.                         |
| `<meta name="viewport" content="width=device-width, initial-scale=1.0">` | Elemen `<meta>` yang memberi tahu browser bagaimana menyesuaikan tampilan halaman web untuk perangkat seluler. Lebar halaman disesuaikan dengan lebar perangkat, dan skala awalnya adalah 1.0. |
| `<title>`                                                                | Elemen yang menentukan judul halaman web yang akan ditampilkan di tab browser. Digunakan oleh mesin pencari untuk menampilkan judul halaman dalam hasil pencarian.                             |
| `<body>`                                                                 | Elemen yang berisi semua konten aktual yang ingin ditampilkan di halaman web, seperti teks, gambar, tautan, tabel, formulir, dan elemen-elemen lainnya.                                        |

## Elemen Dasar HTML

Berikut adalah beberapa elemen dasar HTML yang sering digunakan:

### Judul

```html
<h1>Judul Utama</h1>
<h2>Judul Kedua</h2>
<h3>Judul Ketiga</h3>
<!-- Dan seterusnya hingga h6 -->
```

### Paragraf

```html
<p>Ini adalah contoh paragraf.</p>
```

### Tautan (Link)

```html
<a href="https://www.contoh.com">Ini adalah tautan</a> ke situs web Contoh.
```

### Gambar

```html
<img src="gambar.jpg" alt="Deskripsi Gambar" />
```

### Daftar Terurut

```html
<ol>
  <li>Pertama</li>
  <li>Kedua</li>
  <li>Ketiga</li>
</ol>
```

### Daftar Tak Terurut

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Memulai dengan HTML

Untuk memulai belajar HTML, Anda dapat menggunakan editor teks sederhana seperti Notepad (di Windows) atau TextEdit (di Mac). Cobalah untuk membuat halaman sederhana dan bermain dengan elemen-elemen dasar yang telah kita pelajari.

## Rujukan Tambahan

| Sumber Daya                                                                      | Deskripsi                                                                                                                             |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)          | MDN Web Docs menyediakan dokumentasi HTML yang komprehensif, termasuk tutorial dan referensi.                                         |
| [W3Schools HTML Tutorial](https://www.w3schools.com/html/)                       | W3Schools menawarkan tutorial interaktif yang baik untuk mempelajari dasar-dasar HTML dengan latihan langsung di browser.             |
| [HTML.com](https://www.html.com/)                                                | HTML.com menyediakan tutorial, artikel, dan sumber daya lainnya untuk mempelajari HTML secara mendalam.                               |
| [HTML Dog](https://htmldog.com/)                                                 | HTML Dog adalah sumber daya pembelajaran HTML yang berfokus pada praktik terbaik dan semangat pengembangan web yang berkelanjutan.    |
| [FreeCodeCamp: HTML Course](https://www.freecodecamp.org/learn/)                 | FreeCodeCamp menawarkan kursus belajar HTML secara gratis dengan proyek-proyek praktis.                                               |
| [YouTube](https://www.youtube.com/)                                              | Banyak tutorial HTML yang tersedia di YouTube, baik dari pembuat konten independen maupun saluran resmi platform pembelajaran online. |
| [Stack Overflow HTML Questions](https://stackoverflow.com/questions/tagged/html) | Stack Overflow adalah tempat yang bagus untuk mencari pertanyaan dan jawaban terkait HTML dari komunitas pengembang web.              |


