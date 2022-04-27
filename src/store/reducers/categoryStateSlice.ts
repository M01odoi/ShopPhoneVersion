import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ISlice {
    isActiveChange: boolean,
    activeCategory: number,
    isAllActiveCategory: boolean,
    isAddingCategory: boolean,
    isChangeName: boolean,
    charLeft: number,
    isValid: boolean,
    newName: string,
}

const initialState: ISlice = {
    isActiveChange: false,
    activeCategory: 0,
    isAddingCategory: false,
    isChangeName: false,
    charLeft: 0,
    isValid: true,
    isAllActiveCategory: false,
    newName: '',
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
        setIsValid(state, action: PayloadAction<boolean>) {
            state.isValid = action.payload;
        },
        setIsAllActiveCategory(state, action: PayloadAction<boolean>) {
            state.isAllActiveCategory = action.payload;
        },
        setNewName(state, action: PayloadAction<string>) {
            state.newName = action.payload;
        }
    }
})

export const {
    setIsActiveChange,
    setActiveCategory,
    setIsAddingCategory,
    setIsChangeName,
    setCharLeft,
    setIsValid,
    setIsAllActiveCategory,
    setNewName,
} = categoryStateSlice.actions

export default categoryStateSlice.reducer;