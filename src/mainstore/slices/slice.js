import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import state from "./status";
import statuss from "./status";



let initial_State={
    getitems : [],
    status : state.pendding,
}
 let getitem = createSlice({
    name : "items",
    initialState : initial_State,
    extraReducers:(builder)=>{
        builder.addCase(fetchitems.pending,(state,action)=>{
            state.status = statuss.pendding;

        });
        builder.addCase(fetchitems.fulfilled,(state,action)=>{
            state.status = statuss.complete;
            state.getitems = action.payload;
            // console.log(action.payload);
        });
        
        builder.addCase(fetchitems.rejected,(state,action)=>{
            state.status = statuss.errorr;
        });
    },
});


let fetchitems = createAsyncThunk("fetchitems", async()=>{
    let response = await axios.get(" https://api.escuelajs.co/api/v1/categories")
    return response.data;
})
let {reducer}=getitem;

export{fetchitems, reducer as getReducer}