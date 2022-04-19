import React from "react";
import './cards.scss';
import StackGrid from "react-stack-grid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import products from "../../api/products";
import {IProduct} from "../../interfaces/IProduct";
import {setNewProduct} from "../../store/reducers/productSlice";

const Cards = (): JSX.Element => {
    const dispatch = useAppDispatch();
    products.then((value: IProduct[]) => {
        dispatch(setNewProduct(value));
    })
    const arrProducts = useAppSelector(state => state.products.products);

    const renderCards = (): JSX.Element[] => {
        let tickets: JSX.Element[] = [];
        arrProducts && arrProducts.forEach((arr) => {
            tickets.push(
                <li key={arr.id}>
                    <section className='ticket' key={arr.id}>
                        <img src={arr.img} alt=""/>
                        <h4>{arr.name}</h4>
                        <p>{arr.cost}
                            <span className='item'> {' ' + arr.per}</span>
                        </p>
                    </section>
                </li>
            )
        })
        return tickets
    }
    return (
        <ul>
            <StackGrid duration={0} columnWidth={170} gutterHeight={5}>
                {renderCards()}
                <button className='ticket lastCard'>
                    <FontAwesomeIcon icon={'plus-circle'} className='fa-3x'/>
                    <p>Tap to add<br/> a new item</p>
                </button>
            </StackGrid>
        </ul>
    )
}

export default Cards;