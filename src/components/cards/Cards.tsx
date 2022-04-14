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
    const state = useAppSelector(state => state.products);

    const renderCards = (): JSX.Element[] => {
        let tickets = [];
        if (state.products) {
            for (const i of state.products) {
                tickets.push(
                    <article className='ticket' key={i.id}>
                    <img
                        src={i.img}
                        alt=""/>
                    <p>{i.name}</p>
                    <p>{i.cost} <span
                        className='item'>{i.per}</span></p>
                </article>)
            }
        }
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