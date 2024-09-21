import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "..";


export const VehicleSlice = createSlice({
    name: 'vehicleList',

    initialState: {
        list: [],
        filters: {
            searchParam: '',
            seats: null,
            manufactureDateRange: {
                start: null,
                end: null
            }
        }
    },

    reducers: {
        setData: (state, action) => {
            state.list = action.payload
        },
        setSearch: (state, action) => {
            state.filters.searchParam = action.payload
        },
        setSeat: (state, action) => {
            state.filters.seats = action.payload
        },
        setManufactureDate: (state, action) => {
            state.filters.manufactureDateRange = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(HYDRATE, (state, action: AnyAction) => {
            console.log(action);
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