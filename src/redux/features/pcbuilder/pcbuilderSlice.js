import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pcItems:[]
}

export const pcbuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount } = pcbuilderSlice.actions

export default pcbuilderSlice.reducer;