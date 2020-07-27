divideAndSort = (number) => {
    if (typeof number == 'number') {
        let str = number.toString().split('0');
        let loop = null
        let newArray = ''
        for (loop = 0; loop <= str.length; loop++) {
            newArray += str[loop].split('').sort().join('')

            console.log(parseInt(newArray))
        }
        // console.log(parseInt(newArray))
    } else {
        console.log('Inputan harus angka!');
    }
    return newArray;
}
divideAndSort(5956560159466056);