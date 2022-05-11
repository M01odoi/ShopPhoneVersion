import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/ICategory";

interface ISlice {
  isActiveChange: boolean;
  activeCategory: number[];
  isAddingCategory: boolean;
  isChangeName: boolean;
  charLeft: number;
  isValid: boolean;
  newName: string;
  isShowModal: boolean;
}

const initialState: ISlice = {
  isActiveChange: false,
  activeCategory: [],
  isAddingCategory: false,
  isChangeName: false,
  charLeft: 0,
  isValid: true,
  newName: "",
  isShowModal: false,
};

const categoryStateSlice = createSlice({
  name: "categoryState",
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
    resetActiveCategory(state) {
      state.activeCategory = [];
    },
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory.find((id) => id === action.payload)
        ? (state.activeCategory = state.activeCategory.filter(
            (id) => id !== action.payload
          ))
        : state.activeCategory.push(action.payload);
    },
    setCharLeft(state, action: PayloadAction<number>) {
      state.charLeft = action.payload;
    },
    setIsValid(state, action: PayloadAction<boolean>) {
      state.isValid = action.payload;
    },
    setAllActiveCategory(state, action: PayloadAction<ICategory[] | null>) {
      action.payload &&
        (state.activeCategory.length === action.payload.length
          ? state.activeCategory.splice(0, state.activeCategory.length - 1)
          : action.payload.forEach(
              (obj) =>
                !state.activeCategory.find((id) => id === obj.id) &&
                state.activeCategory.push(obj.id)
            ));
    },
    setNewName(state, action: PayloadAction<string>) {
      state.newName = action.payload;
    },
    setIsShowModal(state, action: PayloadAction<boolean>) {
      state.isShowModal = action.payload;
    },
  },
});

export const {
  setIsActiveChange,
  setActiveCategory,
  setIsAddingCategory,
  setIsChangeName,
  setCharLeft,
  setIsValid,
  setAllActiveCategory,
  setNewName,
  setIsShowModal,
  resetActiveCategory,
} = categoryStateSlice.actions;

export default categoryStateSlice.reducer;
