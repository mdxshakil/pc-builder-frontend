import { configureStore } from '@reduxjs/toolkit'
import pcbuilderSlice from './features/pcbuilder/pcbuilderSlice'

export const store = configureStore({
    devTools:false,
    reducer: {
        pcBuilder: pcbuilderSlice,
    },
})