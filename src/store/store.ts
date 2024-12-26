import { configureStore } from "@reduxjs/toolkit"
import digimonReducer from "./reducers/digimon"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const store = configureStore({
  reducer: {
    digimon: digimonReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
