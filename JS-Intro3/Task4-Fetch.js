const url = 'https://jsonplaceholder.typicode.com/users'
async function getName() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.map(item => console.log(item.name));
    } catch (error) {
        console.log(error)
    }
}
getName()