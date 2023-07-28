import { configureStore } from '@reduxjs/toolkit'
import pcbuilderSlice from './features/pcbuilder/pcbuilderSlice'

export const store = configureStore({
    reducer: {
        pcBuilder: pcbuilderSlice,
    },
})