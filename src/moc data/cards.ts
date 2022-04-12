import cardImg from '../img/cardImg.jpg'
import {IProduct} from "../interfaces/IProduct";

const cards: IProduct[] = [
    {
        img: cardImg,
        name: 'Product 1',
        cost: 'USD 100.00',
        per: 'item'
    },
    {
        img: cardImg,
        name: 'Lorem ipsum dolor sit amet,',
        cost: 'USD 100.00',
        per: 'piece'
    },
    {
        img: cardImg,
        name: 'Lorem ipsum dolor sit amet, Lorem amet,',
        cost: 'USD 100.00',
        per: 'item'
    }
]

export default cards;