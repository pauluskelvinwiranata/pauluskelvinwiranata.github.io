+++
title = 'Pengenalan Dasar CSS Untuk Pemula'
date = 2024-04-07T16:56:23+07:00
draft = false
language = 'ID'
math = true
readTime = true
autonumber = true
toc = true
+++

## Apa Itu CSS?

CSS adalah singkatan dari Cascading Style Sheets. Ini adalah bahasa yang digunakan untuk mengontrol presentasi visual elemen-elemen HTML pada halaman web. Dengan CSS, Anda dapat mengatur warna, ukuran, jenis font, tata letak, dan banyak lagi, yang memungkinkan Anda untuk menciptakan desain yang menarik dan konsisten di seluruh situs web Anda.

## Menghubungkan CSS ke HTML

Ada beberapa cara untuk menyematkan CSS ke dalam dokumen HTML Anda. Cara yang paling umum adalah dengan menggunakan tag `<link>` untuk menyematkan file CSS eksternal, atau dengan menggunakan tag `<style>` untuk menulis CSS langsung di dalam dokumen HTML. Selain itu, Anda juga dapat menggunakan CSS inline dengan menambahkan properti style di dalam atribut HTML langsung.

### File CSS eksternal

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh Situs Web</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Selamat Datang di Contoh Situs Web</h1>
    <p>Ini adalah paragraf contoh.</p>
  </body>
</html>
```

```css
<!--file: style.css --> h1 {
  font-size: 20px;
  color: yellow;
  margin-bottom: 5px;
}

p {
  font-size: 15px;
  color: red;
}
```

### Tag `<style>` di dalam dokumen HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh Situs Web</title>
    <style>
      h1 {
        color: blue;
        font-size: 24px;
      }
      p {
        font-family: Arial, sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Selamat Datang di Contoh Situs Web</h1>
    <p>Ini adalah paragraf contoh.</p>
  </body>
</html>
```

### CSS inline pada elemen HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh Situs Web</title>
  </head>
  <body>
    <h1 style="color: blue; font-size: 24px;">
      Ini adalah Judul dengan Gaya Inline
    </h1>
    <p style="font-family: Arial, sans-serif;">
      Ini adalah paragraf dengan gaya inline.
    </p>
    <div style="background-color: lightgray; padding: 10px;">
      Ini adalah div dengan gaya inline.
    </div>
  </body>
</html>
```

## Selektor CSS Dasar

Selektor CSS adalah pola yang digunakan untuk memilih elemen HTML yang akan diberikan gaya. Ada beberapa jenis selektor yang sering digunakan, antara lain:

### Selektor Elemen

Selektor elemen memilih elemen HTML berdasarkan nama tag. Misalnya, untuk memberi gaya pada semua paragraf (<p>), kita menggunakan selektor elemen seperti ini:

```css
p {
  color: blue;
  font-size: 16px;
}
```

### Selektor Class

Selektor class digunakan untuk memberi gaya pada satu atau lebih elemen yang memiliki atribut class yang sama. Class diawali dengan tanda titik (.). Misalnya:

```html
<p class="highlight">Ini adalah paragraf pertama.</p>
<p class="highlight">Ini adalah paragraf kedua.</p>
```

```css
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

### Selektor ID

Selektor ID digunakan untuk memberi gaya pada elemen tunggal yang memiliki atribut id yang unik. ID diawali dengan tanda pagar (#). Misalnya:

```html
<h1 id="main-title">Judul Utama</h1>
```

```css
#main-title {
  text-align: center;
  color: red;
}
```

## Properti CSS Dasar

Setelah kita memahami cara memilih elemen dengan selektor, langkah selanjutnya adalah menerapkan gaya dengan properti CSS. Berikut adalah beberapa properti CSS dasar yang sering digunakan:

### Warna Teks (color)

Properti color digunakan untuk mengubah warna teks. Contoh:

```css
p {
  color: green;
}
```

### Ukuran Font (font-size)

Properti font-size digunakan untuk mengatur ukuran teks. Contoh:

```css
h1 {
  font-size: 24px;
}
```

### Warna Latar Belakang (background-color)

Properti background-color digunakan untuk mengubah warna latar belakang elemen. Contoh:

```css
div {
  background-color: lightgray;
}
```

### Margin dan Padding

Properti margin dan padding digunakan untuk mengatur ruang di sekitar elemen. Margin adalah jarak di luar elemen, sedangkan padding adalah jarak di dalam elemen dari batasnya. Contoh:

```css
div {
  margin: 20px;
  padding: 10px;
}
```

## Rujukan Tambahan

| Sumber Daya                                                                                                    | Deskripsi                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [MDN Web Docs: CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)                                          | MDN Web Docs menyediakan dokumentasi CSS yang komprehensif, termasuk tutorial dan referensi.                                         |
| [W3Schools CSS Tutorial](https://www.w3schools.com/css/)                                                       | W3Schools menawarkan tutorial interaktif yang baik untuk mempelajari dasar-dasar CSS dengan latihan langsung di browser.             |
| [CSS-Tricks](https://css-tricks.com/)                                                                          | CSS-Tricks menyediakan artikel, tutorial, dan contoh praktis yang membantu Anda memahami dan menguasai CSS.                          |
| [Codecademy: Learn CSS](https://www.codecademy.com/learn/learn-css)                                            | Codecademy menawarkan kursus interaktif yang dirancang untuk membantu Anda belajar CSS dari dasar hingga lanjutan.                   |
| [FreeCodeCamp: Responsive Web Design Certification](https://www.freecodecamp.org/learn/responsive-web-design/) | FreeCodeCamp menawarkan sertifikasi gratis yang mencakup pelajaran CSS dan proyek praktis.                                           |
| [CSS Zen Garden](http://www.csszengarden.com/)                                                                 | CSS Zen Garden adalah sumber inspirasi untuk desain CSS dengan contoh-contoh yang menunjukkan kekuatan CSS.                          |
| [YouTube](https://www.youtube.com/)                                                                            | Banyak tutorial CSS yang tersedia di YouTube, baik dari pembuat konten independen maupun saluran resmi platform pembelajaran online. |
| [Stack Overflow CSS Questions](https://stackoverflow.com/questions/tagged/css)                                 | Stack Overflow adalah tempat yang bagus untuk mencari pertanyaan dan jawaban terkait CSS dari komunitas pengembang web.              |


