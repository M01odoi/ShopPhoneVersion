import cards from "../mocData/cards";
import {IProduct} from "../interfaces/IProduct";

const products:Promise<IProduct[]> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(cards);
    }, 1000)
})

export default products;