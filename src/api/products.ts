import cards from "../moc data/cards";
import {IProduct} from "../interfaces/IProduct";

const products:Promise<IProduct[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(cards);
    }, 5000)
})

export default products;