import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IProduct} from "../../interfaces/IProduct";

interface IProductState {
    products: IProduct[] | null;
}

const initialState: IProductState = {products: null};


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setNewProduct(state, action: PayloadAction<IProduct[]>) {
            console.log(action.payload);
            // state.products?.push()
            state.products = action.payload;
        },
    }
})
export const {setNewProduct} = productSlice.actions

export default productSlice.reducer;