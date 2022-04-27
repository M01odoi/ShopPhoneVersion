import cardImg from '../img/cardImg.jpg'
import {IProduct} from "../interfaces/IProduct";

const cards: IProduct[] = [
    {
        id: '1',
        img: cardImg,
        name: 'Product 1',
        cost: 'USD 100.00',
        per: 'item'
    },
    {
        id: '2',
        img: cardImg,
        name: 'Lorem ipsum dolor sit amet,',
        cost: 'USD 100.00',
        per: 'piece'
    },
    {
        id: '3',
        img: cardImg,
        name: 'Lorem ipsum dolor sit amet, Lorem amet,',
        cost: 'USD 100.00',
        per: 'item'
    },
]

export default cards;