const printSegitiga = 5;
let s = '';

if (typeof printSegitiga === 'number') {
    for (let i = printSegitiga; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            s += j;
        }
        s += '\n';
    }
    console.log(s);
} else {
    console.log("Data Harus Angka");
}