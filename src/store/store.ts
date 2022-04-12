import {Action, combineReducers} from 'redux';
import { configureStore } from '@reduxjs/toolkit/dist';
import productSlice from "./reducers/productSlice";
import {ThunkAction} from "@reduxjs/toolkit";

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

const allReducers = combineReducers({
   products:productSlice,
// category:categorySlice
});
const store = configureStore({ reducer: allReducers});

export default store;
