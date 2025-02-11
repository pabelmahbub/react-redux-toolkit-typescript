import { IProduct } from "@/types/globalTypes";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ICart {
    products: IProduct[];
    total: number;
}
const initialState: ICart = {
    products:[],
    total: 0,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            const existing = state.products.find((product) => product._id === action.payload._id);

            if(existing){
                console.log('clicked');
                existing.quantity = existing.quantity! +1;
            }else{
                state.products.push({...action.payload, quantity: 1})
            }
            state.total += action.payload.price;
        },
        removeOne: (state, action: PayloadAction<IProduct>) => {
            const existing = state.products.find((product) => product._id === action.payload._id);

            if(existing && existing.quantity! >  1){
                console.log('clicked');
                existing.quantity = existing.quantity! - 1;
            }else{
                state.products = state.products.filter((product) => product._id !== action.payload._id)
            }
            state.total -= action.payload.price;
        },
        removeFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product) => product._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity!;
        }
    }

})

export const {addToCart, removeOne, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;