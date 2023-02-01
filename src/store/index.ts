
import { configureStore} from "@reduxjs/toolkit";
import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { moveBelowReducer } from "./Reducers/movedown";
import { dragEndReducer}  from "./Reducers/drag";
const initialState:{
    board:string[];
    boardSize:number;
    squareBeingReplaced: Element | undefined;
    squareBeingDragged: Element | undefined;
} ={
    board:[],
    boardSize:8,
    squareBeingReplaced: undefined,
    squareBeingDragged: undefined,
};

const candyCrushSlice = createSlice({
    name:"candy",
    initialState,
    reducers:{
        updateBoard:(state,action:PayloadAction<string[]>)=>{
            state.board=action.payload;
        },
        dragStart: (state, action: PayloadAction<any>) => {
            state.squareBeingDragged = action.payload;
          },
          dragDrop: (state, action: PayloadAction<any>) => {
            state.squareBeingReplaced = action.payload;
          },
        moveBelow: moveBelowReducer,
        dragEnd:dragEndReducer,
    }
});
export const store = configureStore({
    reducer:{
        candy : candyCrushSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const { dragStart,dragDrop,moveBelow,updateBoard,dragEnd} =candyCrushSlice.actions;
export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
