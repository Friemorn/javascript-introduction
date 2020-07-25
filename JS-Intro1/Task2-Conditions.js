const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

if (mtk == '' || bahasaIndonesia == '' || bahasaInggris == '' || ipa == '') {
    alert('Nilai Tidak Boleh Kosong');
} else {
    let grade = '';
    let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4

    if (rataRata <= 59) {
        grade = 'E';
    } else if (rataRata <= 69) {
        grade = 'D';
    } else if (rataRata <= 79) {
        grade = 'C';
    } else if (rataRata <= 89) {
        grade = 'B';
    } else if (rataRata <= 100) {
        grade = 'A';
    }
    console.log(`Rata-rata = ${rataRata}`);
    console.log(`Grade = ${grade}`);
};