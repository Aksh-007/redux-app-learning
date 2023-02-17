// created store as a centralize place to store state/ data of a app
import {configureStore} from "@reduxjs/toolkit";

// this is object of reducer we can pass/give multiple reducer 
const store = configureStore({
//    in this  we can put multiple reducer and itwill combine all of them 
    reducer:{},
});

export default store;