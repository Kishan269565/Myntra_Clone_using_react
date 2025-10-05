import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice";
import bagSlice from "./bagslice";
import fetchStatusSlice from "./fetchstatusSlice";

const mytrastore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchstatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer,
    }
});
export default mytrastore;