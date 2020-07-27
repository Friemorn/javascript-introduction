divideAndSort = (number) => {
    if (typeof number === 'number') {
        const str = number.toString().split('0');
        let newNumber = ''
        for (let i = 0; i <= str.length - 1; i++) {
            newNumber += str[i].split('').sort().join('')
        }
        console.log(parseInt(newNumber))
        return newNumber;
    } else {
        console.log('Inputan harus angka!');
    }
}
divideAndSort(5956560159466056);