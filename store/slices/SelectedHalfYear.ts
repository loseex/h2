import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface SelectedHalfYear {
    value: 1 | 2
}

export const initialState: SelectedHalfYear = {
    value: 1
}

export const SelectedHalfYearSlice = createSlice({
    name: 'SelectedHalfYear',
    initialState,
    reducers: {
        SelectHalfYear: (state: SelectedHalfYear, action: PayloadAction<1 | 2>)  => {
            state.value = action.payload;
        },
    }
})

export const { SelectHalfYear } = SelectedHalfYearSlice.actions;
export default SelectedHalfYearSlice.reducer;