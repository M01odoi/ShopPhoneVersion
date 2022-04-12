import categories from "../moc data/categories";

const category = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(categories);
    }, 1000);
})

export default category;