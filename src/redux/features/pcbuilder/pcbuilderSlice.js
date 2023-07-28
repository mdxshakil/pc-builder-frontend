import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pcItems: []
}

export const pcbuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {
        addToBuilder: (state, action) => {
            const newProduct = action.payload;
            const existingProduct = state?.pcItems?.find(
                (product) => product.category === newProduct.category
            );

            if (existingProduct) {
                // Replace the existing product with the same category
                const existingProductIndex = state.pcItems.indexOf(existingProduct);
                state.pcItems[existingProductIndex] = newProduct;
            } else {
                // Add the new product to the state
                state.pcItems.push(newProduct);
            }
        },
        removeFromBuilder: (state, action) => {
            state.pcItems = state?.pcItems?.filter(item => item._id !== action.payload)
        },
        clearBuilder: (state, action) => {
            state.pcItems = [];
        },
    },
})

export const { addToBuilder, removeFromBuilder, clearBuilder } = pcbuilderSlice.actions

export default pcbuilderSlice.reducer;