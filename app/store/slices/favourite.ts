import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";


export const FavouriteSlice = createSlice({
    name: 'favoriteList',

    initialState: {
        list: [],
    },

    reducers: {
        addData: (state: any, action) => {
            state.list = [...state.list, ...action.payload]
            
        },
        setFavouriteData: (state: any, action) => {
            state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: AnyAction) => {
			return {
				...state,
				...action.payload.favourite,
			}
		})
    }
})

export const { addData, setFavouriteData } = FavouriteSlice.actions;

export const importFavouriteData = (state: AppState) => state.favourite.list;


export default FavouriteSlice.reducer;