import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "./store";

//Aliasing regular useDispatch and useSelelctor hooks, and adding types.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Exporting two hooked vars that have the right TS types defined.
// So we need to use them, instead of base fns (useSelector, useDispatch) frm react-redux
