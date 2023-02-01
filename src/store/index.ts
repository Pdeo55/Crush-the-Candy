
import { configureStore} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
const initialState:{
    board:string[];
    boardSize:number;
} ={
    board:[],
    boardSize:8,
};

const candyCrushSlice = createSlice({
    name:"candy",
    initialState,
    reducers:{

    }
});
export const store = configureStore({
    reducer:{
        candy : candyCrushSlice.reducer,
    },
});

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
