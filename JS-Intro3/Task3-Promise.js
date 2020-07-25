// Program Hitung Nilai Akhir
const finalScore = (attendance, task, midtermExam, finalExam) => {
    return new Promise((resolve, reject) => {
        if (typeof attendance === 'number' && typeof task === 'number' && typeof midtermExam === 'number' && typeof finalExam === 'number') {
            const count = ((0.1 * attendance) + (0.1 * task) + (0.3 * midtermExam) + (0.5 * finalExam))
            const total = `Nilai akhir adalah ${count}`
            resolve(total)
        } else {
            reject(new Error('Inputan Bukan Angka'))
        }
    })
}
finalScore(100, 100, 100, 100)
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })

// Program Konversi Suhu dari Celcius
const tempConversion = (celcius) => {
    return new Promise((resolve, reject) => {
        if (typeof celcius === 'number') {
            const fahrenheit = (celcius * 1.8) + 32
            const reamur = celcius * 0.8
            const kelvin = celcius + 273.15
            const conversion = `Celcius : ${celcius}\nFahrenheit : ${fahrenheit}\nReamur : ${reamur}\nKelvin : ${kelvin}`
            resolve(conversion)
        } else {
            reject(new Error('Inputan Bukan Angka'))
        }
    })
}
tempConversion(100)
    .then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err.message)
    })