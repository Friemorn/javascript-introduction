const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'Februari', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const printMonth = (error, data) => {
    if (error == null) {
        let result = data;
        result.map((item) => {
            console.log(item)
        })
    } else {
        console.log(error.message)
    }
}

getMonth(printMonth)