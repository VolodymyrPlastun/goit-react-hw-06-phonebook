import { configureStore } from "@reduxjs/toolkit";
import {mySlice} from './slice';

export const store = configureStore({
    reducer: {
        contacts: mySlice.reducer
    }
})