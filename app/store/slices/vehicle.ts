import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";


export const VehicleSlice = createSlice({
    name: 'vehicleList',

    initialState: {
        list: [],
    },

    reducers: {
        setData: (state, action) => {
            state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: AnyAction) => {
			return {
				...state,
				...action.payload.vehicle,
			}
		})
    }
})

export const { setData } = VehicleSlice.actions;

export const importData = (state: AppState) => state.vehicle.list;


export default VehicleSlice.reducer;