import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartValues:[]
}

const cartReducer= createSlice({
    name:'mobile',
    initialState,
    reducers:{
        addProduct:(state,action)=>{
state.cartValues.push(action.payload)
        },
        deleteProduct:(state,action)=>{
           const id=state.cartValues.findIndex(each=>each.id===action.payload)
           if(id!==-1){
            state.cartValues.splice(id,1)
           }
        }
    }
})
export const {addProduct,deleteProduct}=cartReducer.actions
export default cartReducer.reducer