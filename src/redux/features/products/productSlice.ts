import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface IProduct {
    status: boolean;
    priceRange: number
    
}
const initialState: IProduct = {
    status: false,
    priceRange: 200
    
}


const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleState: (state)=> {
            state.status = !state.status
        },
        setPriceRange:(state, action: PayloadAction<number>)=> {
            state.priceRange = action.payload;

        }
        
    }

})

export const {toggleState, setPriceRange} = productSlice.actions;
export default productSlice.reducer;