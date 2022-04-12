import products from "../api/products";
import {setNewProduct} from "../store/reducers/productSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {RootState} from "../store/store";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {IProduct} from "../interfaces/IProduct";

const Product = () => {
    const dispatch = useAppDispatch();
    products.then((value: IProduct[]) => {
        dispatch(setNewProduct(value));
    })
    const state = useAppSelector(state => state.products);

    useEffect(() => {
        console.log(state, typeof state)
    }, [state]);
    const renderCards = () => {
        return(<div>
            <img src={state.products ? state.products[0].img : ''} alt=""/>

        </div>)
    }
    return (
        <>

        </>
    )
}

export default Product;