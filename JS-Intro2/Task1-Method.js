// A. includes()
// includes berfungsi untuk mengecek apakah pada elemen array memenuhi suatu kondisi atau tidak

const angka1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const something = angka1.includes(2);
const any = angka1.includes(10);

console.log(something); // Output: true
console.log(any); // Output: false

// B. concat()
// concat berfungsi untuk menggabungkan 2 array menjadi 1 array

const buah = ['apel', 'melon', 'anggur']
const no = [1, 2, 3]

const newArray = buah.concat(no);
console.log(newArray); // Output: ["apel", "melon", "anggur", 1, 2, 3]

// C. every()
// every berfungsi untuk mengecek apakah setiap elemen dalam array memenuhi kondisi

const angka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const greaterFive = angka2.every(item => item > 4);
console.log(greaterFive); // Output: false

const lessTen = angka2.every(item => item < 10);
console.log(lessTen); // Output: true

// D. some()
// some berfungsi untuk mengecek sekurang kurangnya salah satu elemen array memenuhi kondisi

const angka3 = [1, 2, 3, 4, 5]

// mengecek apakah dalam array angka terdapat elemen yang habis dibagi 2
const some = angka3.some(item => item % 2);
console.log(some); // Output: true

// mengecek apakah dalam array angka terdapat elemen yang kurang dari 0
const thing = angka3.some(item => item < 0);
console.log(thing); // Output: false

// E. Array.of()
// Array.of berfungsi untuk membuat array dari setiap argumen yang dipassing

const angka4 = Array.of(1, 2, 3, 4, 5, 6);
console.log(angka4); // Output: [1, 2, 3, 4, 5, 6]

// F. reverse()
// reverse digunakan untuk membalikkan urutan dari elemen di dalam array

const arr1 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e'];
console.log(arr1.toString()); // Output: 1,2,3,4,5,a,b,c,d,e

arr1.reverse();
console.log(arr1.toString()); // Output: e,d,c,b,a,5,4,3,2,1

// G. join()
// join berfungsi untuk menggabungkan elemen array menjadi sebuah string

const arr2 = [1, 2, 3, 4, 5, 'a', 'b', 'c', 'd', 'e'];
console.log(arr2.join()); // Output: 1,2,3,4,5,a,b,c,d,e
console.log(arr2.join(".")); // Output: 1.2.3.4.5.a.b.c.d.e
console.log(arr2.join(" ")); // Output: 1 2 3 4 5 a b c d e

// H. reduce()
// reduce berfungsi untuk mengecilkan elemen array menjadi single value dengan menjumlah setiap elemen (dari kiri ke kanan)

const angka = [1, 2, 3, 4, 5];
const sum = angka.reduce((total, value) => total + value, 0); // kita dpt mengganti 0 dengan angka lain untuk mendapatkan hasil penjumlahan yang berbeda
console.log(sum); // Output: 15

// I. pop()
// pop berfungsi menghapus elemen terakhir pada array dan mengembalikan nilai ke pemanggil

const hari = ["Senin", "Selasa", "Rabu", "Kamis", "jum'at", "sabtu", "minggu"];
console.log(hari); // Output : ["Senin", "Selasa", "Rabu", "Kamis", "jum'at", "sabtu", "minggu"]
const popped = hari.pop();
console.log(hari); // Output : ["Senin", "Selasa", "Rabu", "Kamis", "jum'at", "sabtu"]
console.log(popped); // Output : minggu

// J. shift()
// shift() digunakan menghapus elemen yang pertama dari suatu array dan mengembalikan nilai yang dihapus

const languages = ['Java', 'PHP', 'Python'];
const foo = languages.shift();

console.log(foo); // Output : Java
console.log(languages); // Output : ['PHP', 'Python']