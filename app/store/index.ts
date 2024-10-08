import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import vehicleReducer from './slices/vehicle'
import { createWrapper } from "next-redux-wrapper";
import { Action } from 'redux';
import favouriteReducer from "./slices/favourite";

const makeStore = () => configureStore({
    reducer: {
        vehicle: vehicleReducer,
        favourite: favouriteReducer
    },
    devTools: true
})

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const wrapper = createWrapper<AppStore>(makeStore)