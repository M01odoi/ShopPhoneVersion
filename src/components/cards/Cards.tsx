import React, {useEffect} from "react";
import './cards.scss';
import StackGrid from "react-stack-grid";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import products from "../../api/products";
import {IProduct} from "../../interfaces/IProduct";
import {setNewProduct} from "../../store/reducers/productSlice";

const Cards: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const arrProducts = useAppSelector(state => state.products.products);

    useEffect(() => {
        products.then((value: IProduct[]) => {
            dispatch(setNewProduct(value));
        })
    }, [])

    const renderCards = (): JSX.Element[] => {
        let tickets: JSX.Element[] = [];

        arrProducts?.map((arr: IProduct) => {
            tickets.push(
                <div key={arr.id}>
                    <section className='ticket' key={arr.id}>
                        <div className='img'>
                            <img src={arr.img} alt=""/>
                        </div>
                        <h4>{arr.name}</h4>
                        <p>{arr.cost}
                            <span className='item'> {' ' + arr.per}</span>
                        </p>
                    </section>
                </div>
            )
            return tickets;
        });

        return tickets
    }

    return (
        <section>
            <StackGrid duration={0} columnWidth={170} gutterHeight={5}>
                {renderCards()}
                <button className='ticket lastCard'>
                    <FontAwesomeIcon icon={'plus-circle'} className='fa-3x'/>
                    <p>Tap to add<br/> a new item</p>
                </button>
            </StackGrid>
        </section>
    )
}

export default Cards;