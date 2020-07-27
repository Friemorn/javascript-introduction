palindrome = (word) => {
    let rev = '';
    for (let i = word.length - 1; i >= 0; i--)
        rev += word[i];

    if (word == rev) {
        console.log(`${rev} adalah palindrom`)
    } else {
        console.log(`${rev} bukan palindrom`)
    }
    return rev;
}

palindrome('malam');