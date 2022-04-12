import {createSlice} from '@reduxjs/toolkit';
import {ICategory} from "../../interfaces/ICategory";

interface ICategorySlice {
    categories: ICategory[] | null;
}

const initialState: ICategorySlice = {categories: null};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.categories = action.payload;
        },
        addNewCategory(state,action){
          state.categories && state.categories.push(action.payload);
        },
    }
})
export const {setCategory,addNewCategory} = categorySlice.actions

export default categorySlice.reducer;