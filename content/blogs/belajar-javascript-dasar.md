+++
title = 'Pengenalan Dasar JavaScript Untuk Pemula'
date = 2024-04-20T17:04:58+07:00
draft = false
language = 'ID'
math = true
readTime = true
autonumber = true
toc = true
categories = ['Programming']
+++

## Apa Itu JavaScript?

JavaScript adalah bahasa pemrograman yang sangat populer dan digunakan di hampir semua situs web modern. Dengan JavaScript, Anda bisa membuat halaman web lebih dinamis dan interaktif, seperti menambahkan animasi, validasi form, dan banyak lagi.

## Menyematkan JavaScript ke Dalam HTML

Ada beberapa cara untuk menyematkan JavaScript ke dalam dokumen HTML Anda:

### JavaScript Eksternal

JavaScript eksternal melibatkan pembuatan file JavaScript terpisah yang dihubungkan ke dokumen HTML menggunakan tag `<script>`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh Situs Web</title>
  </head>
  <body>
    <h1>Selamat Datang di Contoh Situs Web</h1>
    <button id="myButton">Klik Saya</button>
  </body>
  <script src="script.js"></script>
</html>
```

### JavaScript di Dalam Tag <script>

Anda dapat menulis JavaScript langsung di dalam dokumen HTML menggunakan tag <script>.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contoh Situs Web dengan JavaScript Inline</title>
    <script>
      function sayHello() {
        alert("Hello, World!");
      }
    </script>
  </head>
  <body>
    <h1>Selamat Datang di Contoh Situs Web</h1>
    <button onclick="sayHello()">Klik Saya</button>
  </body>
</html>
```

## Konsep Dasar JavaScript

Berikut adalah beberapa konsep dasar dalam JavaScript yang perlu Anda ketahui:

### Variabel

Variabel digunakan untuk menyimpan nilai. Anda bisa mendeklarasikan variabel menggunakan var, let, atau const.

```javascript
let nama = "John Doe";
const umur = 30;
var alamat = "Jakarta, Indonesia";
```

### Tipe Data

JavaScript memiliki beberapa tipe data dasar:

| Tipe Data | Deskripsi                                     |
| --------- | --------------------------------------------- |
| String    | Teks, diapit oleh tanda kutip (', ", atau `). |
| Number    | Angka, baik integer maupun floating-point.    |
| Boolean   | `true` atau `false`.                          |
| Object    | Struktur data kompleks.                       |
| Array     | Kumpulan nilai.                               |

```javascript
let nama = "John Doe"; // String
let umur = 30; // Number
let isMarried = false; // Boolean
let alamat = { kota: "Jakarta", negara: "Indonesia" }; // Object
let hobbies = ["membaca", "menulis", "berkebun"]; // Array
```

### Operator

Operator digunakan untuk melakukan operasi pada variabel dan nilai. Beberapa operator dasar meliputi:

| Jenis Operator | Contoh Operator   |
| -------------- | ----------------- |
| Aritmatika     | `+`, `-`, `*`     |
| Penugasan      | `=`, `+=`, `-=`   |
| Perbandingan   | `==`, `===`, `!=` |
| Logika         | `&&`, `\|\|`, `!` |

```javascript
// Aritmatika

// Operator +
let angka1 = 5,
  angka2 = 10;
console.log(angka1 + angka2); // 15

// Operator -
let nilai1 = 20,
  nilai2 = 10;
console.log(nilai1 - nilai2); // 10

// Operator *
let bilangan1 = 4,
  bilangan2 = 6;
console.log(bilangan1 * bilangan2); // 24
```

```javascript
// Penugasan

// Operator =
let x = 5;
let y;
y = x; // Nilai x (5) ditugaskan ke y
console.log(y); // 5

// Operator +=
let a = 10;
a += 5; // Sama dengan a = a + 5
console.log(a); // 15

// Operator -=
let b = 20;
b -= 8; // Sama dengan b = b - 8
console.log(b); // 12
```

```javascript
// Perbandingan

// Operator ==
let angka1 = 5;
let angka2 = "5";
console.log(angka1 == angka2); // true (membandingkan nilai)

// Operator ===
console.log(angka1 === angka2); // false (membandingkan nilai dan tipe data)

// Operator !=
let buah1 = "apel";
let buah2 = "jeruk";
console.log(buah1 != buah2); // true (membandingkan nilai)
```

```javascript
// Logika

// Operator && (AND)
let nilai = 80;
console.log(nilai >= 70 && nilai <= 90); // true

// Operator || (OR)
let nama = "Alice";
console.log(nama === "Alice" || nama === "Bob"); // true

// Operator ! (NOT)
let salah = false;
console.log(!salah); // true
```

### Fungsi

Fungsi adalah blok kode yang dirancang untuk melakukan tugas tertentu. Fungsi dapat menerima parameter dan mengembalikan nilai.

```javascript
function salam(nama) {
  return "Halo, " + nama;
}
let sapaan = salam("John"); // "Halo, John"
```

### Kontrol Aliran

Kontrol aliran digunakan untuk membuat keputusan dalam kode, seperti if, else, switch, for, while, dan do...while.

```javascript
// If-else
let nilai = 75;
if (nilai >= 70) {
    console.log("Selamat! Anda lulus.");
} else {
    console.log("Maaf, Anda tidak lulus.");
}

// Switch
let hari = "Senin";
switch (hari) {
    case "Senin":
        console.log("Hari ini adalah Senin.");
        break;
    case "Selasa":
        console.log("Hari ini adalah Selasa.");
        break;
    default:
        console.log("Hari ini adalah hari lainnya.");
}

// For
for (let i = 1; i <= 5; i++) {
    console.log("Iterasi ke-" + i);
}

// While
let angka = 1;
while (angka <= 5) {
    console.log("Angka: " + angka);
    angka++;
}

// Do...while
let counter = 1;
do {
    console.log("Counter: " + counter);
    counter++;
} while (counter <= 5);
```

## Penanganan Event

JavaScript sering digunakan untuk menangani event dalam halaman web, seperti klik tombol atau input pengguna.

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Tombol diklik!");
});
```

## Manipulasi DOM

JavaScript dapat digunakan untuk mengakses dan memanipulasi Document Object Model (DOM) dari halaman web.

```javascript
let elemen = document.getElementById("myElement");
elemen.textContent = "Konten baru";
```

## JavaScript Asinkron

JavaScript mendukung operasi asinkron, memungkinkan Anda untuk menjalankan tugas yang membutuhkan waktu tanpa menghentikan eksekusi kode lainnya. Ini sering dilakukan menggunakan callback, Promise, atau async/await.

### Promise

```javascript
let janji = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Berhasil!");
  }, 1000);
});
janji.then(function (nilai) {
  console.log(nilai); // "Berhasil!"
});
```

### Async/Await

```javascript
async function ambilData() {
  let respon = await fetch("https://api.example.com/data");
  let data = await respon.json();
  console.log(data);
}
ambilData();
```

## Rujukan Tambahan

| Sumber Daya                                      | Deskripsi                                                                                   |
|--------------------------------------------------|---------------------------------------------------------------------------------------------|
| [MDN Web Docs: JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | MDN Web Docs menyediakan dokumentasi JavaScript yang komprehensif, termasuk tutorial dan referensi. |
| [JavaScript.info](https://javascript.info/)      | JavaScript.info adalah sumber daya belajar JavaScript yang luas dengan tutorial dan materi yang mencakup dari dasar hingga lanjutan. |
| [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/) | W3Schools menawarkan tutorial interaktif yang baik untuk mempelajari dasar-dasar JavaScript dengan latihan langsung di browser. |
| [FreeCodeCamp: JavaScript Algorithms and Data Structures Certification](https://www.freecodecamp.org/learn/) | FreeCodeCamp menawarkan sertifikasi gratis yang mencakup pelajaran JavaScript dan proyek praktis. |
| [Codecademy: Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript) | Codecademy menawarkan kursus interaktif yang dirancang untuk membantu Anda belajar JavaScript dari dasar hingga lanjutan. |
| [Eloquent JavaScript](https://eloquentjavascript.net/) | Eloquent JavaScript adalah buku daring yang tersedia secara gratis dan mencakup berbagai konsep JavaScript dengan cara yang jelas dan terstruktur. |
| [YouTube](https://www.youtube.com/)              | Banyak tutorial JavaScript yang tersedia di YouTube, baik dari pembuat konten independen maupun saluran resmi platform pembelajaran online. |
| [Stack Overflow JavaScript Questions](https://stackoverflow.com/questions/tagged/javascript) | Stack Overflow adalah tempat yang bagus untuk mencari pertanyaan dan jawaban terkait JavaScript dari komunitas pengembang web. |

