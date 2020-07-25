const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];

const searchName = (kata, limit, callback) => {

    const str = kata.toLowerCase()
    const search = name.filter((item) => {
        return item.toLowerCase().indexOf(str) > -1
    })
    callback(search, limit)
}

const limitName = (data, limit) => {
    const result = data.slice(0, limit)
    console.log(result)
}

searchName('an', 3, limitName);