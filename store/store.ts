import {configureStore} from "@reduxjs/toolkit";
import SelectedContent from "./slices/SelectedContent";
import SelectedHalfYear from "./slices/SelectedHalfYear";

export const store = configureStore({
    reducer: {
        SelectedPoint: SelectedContent,
        SelectedHalfYear: SelectedHalfYear
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch