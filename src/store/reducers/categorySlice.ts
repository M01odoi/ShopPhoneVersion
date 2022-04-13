import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICategory} from "../../interfaces/ICategory";
import {IProduct} from "../../interfaces/IProduct";

interface ICategorySlice {
    categories: ICategory[] | null;
}

const initialState: ICategorySlice = {categories: null};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action: PayloadAction<ICategory[]>) {
            state.categories = action.payload;
        },
        addNewCategory(state, action) {
            state.categories && state.categories.push({id: state.categories.length + 1, name: action.payload});
        },
        deleteCategory(state, action: PayloadAction<number>) {
            state.categories && (state.categories = state.categories.filter((obj) => obj.id !== action.payload));
        },
        editCategory(state, action) {
            console.log(action.payload.newName, state.categories);
            state.categories && (state.categories = state.categories
                .filter((obj) => obj.id !== action.payload.activeCategory))
                .push({id: action.payload.activeCategory, name: action.payload.newName});
        },
    }
})
export const {setCategory, addNewCategory, deleteCategory, editCategory} = categorySlice.actions

export default categorySlice.reducer;