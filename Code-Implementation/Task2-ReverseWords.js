reverseWords = (word) => {
    const splitString = word.split(' ');
    let rev = [];
    for (let i = splitString.length - 1; i >= 0; i--) {
        rev.push(splitString[i]);
    }
    return console.log(rev.join(' '));
}

reverseWords('Saya Belajar Javascript');