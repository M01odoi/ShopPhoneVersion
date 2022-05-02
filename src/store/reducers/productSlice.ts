import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../interfaces/IProduct";

const initialState: Array<IProduct> = [];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setNewProduct(state, action: PayloadAction<IProduct[]>) {
      action.payload.map((obj: IProduct) => state.push(obj));
    },
  },
});
export const { setNewProduct } = productSlice.actions;

export default productSlice.reducer;
