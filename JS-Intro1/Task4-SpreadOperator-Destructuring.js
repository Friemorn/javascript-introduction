const data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const data2 = {
    ...data,
    name: 'Dewondo Friemorn',
    email: 'dewondofriemorn.s4a@gmail.com',
    hobbies: ["Bersepeda", "Menggambar", "Sepakbola"]
};
console.log(data2);

const {
    street,
    city,
} = data2.address

console.log(street, city);