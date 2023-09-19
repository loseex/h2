import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {PlacemarkType} from "../../types/Placemark.type";

export interface SelectedPoint {
    value: PlacemarkType
}

export const initialState: SelectedPoint = {
    value: {
        id: null,
        icon: undefined,
        location: [],
        half: null,
        info: {
            title: undefined,
            description: undefined,
            image: undefined,
            date: undefined
        }
    }
}

export const ShowOverlaySlice = createSlice({
    name: 'SelectedPoint',
    initialState,
    reducers: {
        SelectPoint: (state: SelectedPoint, action: PayloadAction<PlacemarkType>)  => {
            state.value = action.payload;
        },
        SelectedPointClear: (state: SelectedPoint)  => {
            state.value = initialState.value;
        }
    }
})

export const { SelectPoint, SelectedPointClear } = ShowOverlaySlice.actions;
export default ShowOverlaySlice.reducer;