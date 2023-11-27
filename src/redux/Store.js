import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


 export const store = configureStore({
    //reducer can only update value or state in store
    //reducer key is predefined (object which can hold more than one reducer)
    reducer:{
        //reducer is coming from counterslice since we are export reducer as export default
        counter:counterSlice
    }
})