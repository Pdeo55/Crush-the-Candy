import { TypedUseSelectorHook, useDispatch,useSelector} from "react-redux";
import { AppDispatch,rootState } from ".";


export const useAppDispatch: ()=> AppDispatch =useDispatch;

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
