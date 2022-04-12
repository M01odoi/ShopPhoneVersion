import {createSlice} from '@reduxjs/toolkit';

const initialState = [{}];

const categorySlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addNewProduct(state, action) {

        }
    }
})

export default categorySlice;