import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISlice {
    isActiveChange: boolean,
    activeCategory: number,
    isAddingCategory: boolean,
    isChangeName: boolean,
    charLeft: number,
}

const initialState: ISlice = {
    isActiveChange: false,
    activeCategory: 0,
    isAddingCategory: false,
    isChangeName: false,
    charLeft: 0
}

const categoryStateSlice = createSlice({
    name: 'categoryState',
    initialState,
    reducers: {
        setIsActiveChange(state, action: PayloadAction<boolean>) {
            state.isActiveChange = action.payload;
        },
        setIsAddingCategory(state, action: PayloadAction<boolean>) {
            state.isAddingCategory = action.payload;
        },
        setIsChangeName(state, action: PayloadAction<boolean>) {
            state.isChangeName = action.payload;
        },
        setActiveCategory(state, action: PayloadAction<number>) {
            state.activeCategory = action.payload;
        },
        setCharLeft(state, action: PayloadAction<number>) {
            state.charLeft = action.payload;
        },

    }
})

export const {
    setIsActiveChange,
    setActiveCategory,
    setIsAddingCategory,
    setIsChangeName,
    setCharLeft
} = categoryStateSlice.actions

export default categoryStateSlice.reducer;