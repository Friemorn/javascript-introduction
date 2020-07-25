const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

cekHariKerja('senin')
    .then((res) => {
        // Panggil promise dengan then jika promise resolve dan jalankan apa yang ada dalam resolve
        console.log(res + ' adalah hari Kerja')
    }).catch((err) => {
        // Panggil promise dengan catch jika promise reject dan jalankan apa yang ada dalam reject
        console.log(err.message)
    })

const getData = async () => {
    // Async untuk memberitahu jika nanti akan ada script yang asynchronous yang akan dimulai dari keyword await
    try {
        // Panggil promise dengan try jika promise resolve dan jalankan apa yang ada dalam resolve
        let result = await cekHariKerja('sabtu')
        // Await untuk memberhentikan sementara sampai promise selesai
        console.log(result + ' adalah hari Kerja')
    } catch (error) {
        // Panggil promise dengan catch jika promise reject dan jalankan apa yang ada dalam reject
        console.log(error.message)
    }
}
getData()