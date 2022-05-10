import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "../../interfaces/ICategory";

interface ICategorySlice {
  categories: ICategory[] | null;
  fakeCategories: ICategory[] | null;
}

const initialState: ICategorySlice = { categories: null, fakeCategories: null };

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<ICategory[]>) {
      !state.categories && (state.categories = action.payload);
      !state.fakeCategories && (state.fakeCategories = action.payload);
    },

    updateCategory(state) {
      state.fakeCategories?.forEach((obj, index) => (obj.id = index + 1));
      state.categories = JSON.parse(JSON.stringify(state.fakeCategories));
    },

    updateFakeCategory(state) {
      state.fakeCategories = JSON.parse(JSON.stringify(state.categories));
    },

    addNewCategory(state, action) {
      state.fakeCategories?.splice(state.fakeCategories.length - 1, 1, {
        id: state.fakeCategories[state.fakeCategories.length - 1].id,
        name: action.payload,
      });
      state.fakeCategories?.push({
        id: state.fakeCategories[state.fakeCategories.length - 1].id + 1,
        name: "Uncategorised",
      });
    },
    deleteCategory(state, action: PayloadAction<number | Array<number>>) {
      state.fakeCategories &&
        (state.fakeCategories = state.fakeCategories.filter(
          (obj) => obj.id !== action.payload
        ));
    },
    editCategory(state, action) {
      state.fakeCategories?.splice(
        state.fakeCategories?.findIndex((obj) => obj.id === action.payload.id),
        1,
        {
          id: action.payload.id,
          name: action.payload.newName,
        }
      );
    },
  },
});
export const {
  setCategory,
  addNewCategory,
  deleteCategory,
  editCategory,
  updateCategory,
  updateFakeCategory,
} = categorySlice.actions;

export default categorySlice.reducer;
