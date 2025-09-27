let data = [];
let jsonApi = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if (!response.ok) {
            throw new Error("Ma'lumot noto'g'ri kelmoqda!")
        }

        data = await response.json();
    } catch (error) {
        console.log(error.message);
    }
}

await getData();

export { data, jsonApi }