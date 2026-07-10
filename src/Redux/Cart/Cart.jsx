
// import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     items: []
// };

// const cartSlice = createSlice({
//     name: "cart",
//     initialState,

//     reducers: {
//         addToCart: (state, action) => {

//             const existingProduct = state.items.find(
//                 item => item.id === action.payload.id
//             );

//             if (!existingProduct) {
//                 state.items.push(action.payload);
//             }
//         },

//         removeFromCart: (state, action) => {

//             state.items = state.items.filter(
//                 item => item.id !== action.payload
//             );
//         }
//     }
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;

let cartData=JSON.parse(localStorage.getItem('cartData'))|| []

let cartSlice=createSlice({
    name:'cart',
    initialState:cartData,
    reducers:{
        ADDTOCART:((state,action)=>{
            let product = action.payload
            let existingItem =state.find(item=>item.id==product.id)

            if(existingItem){
                existingItem.quantity+=1
            }
            else{
                state.push(product)
            }

            localStorage.setItem('cartData',JSON.stringify(state))
        })
    }
})

export const {ADDTOCART} = cartSlice.actions
export default cartSlice.reducer