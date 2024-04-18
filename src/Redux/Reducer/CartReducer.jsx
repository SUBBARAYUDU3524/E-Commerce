import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartValues:[],
    totalprice:0

}


const cartReducer= createSlice({
    name:'mobile',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
        state.cartValues.push(action.payload)
         const filteredprices=state.cartValues.map((each)=>each.price)
        state.totalprice=filteredprices.reduce((total,product)=>total+product)
    },
    deleteProduct:(state,action)=>{
        const id=state.cartValues.findIndex(each=>each.id===action.payload)
        if(id!==-1){
            state.cartValues.splice(id,1)
        }
        state.totalprice= state.cartValues.reduce((total,product)=>total+product.price,0)
        }
    }
})
export const {addProduct,deleteProduct}=cartReducer.actions
export default cartReducer.reducer