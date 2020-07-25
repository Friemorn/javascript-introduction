const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
    if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
        const filterArray = dataArray.filter(item => item >= nilaiAwal && item <= nilaiAkhir);
        const urutData = filterArray.sort((a, b) => a - b);
        return urutData;
    } else if (nilaiAwal > nilaiAkhir && dataArray.length > 5) {
        const err = 'Nilai akhir harus lebih besar dari nilai awal';
        return err;
    } else if (dataArray.length <= 5) {
        const err2 = 'Jumlah angka dalam dataArray harus lebih dari 5';
        return err2;
    }
}
console.log(seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8]));