import { createSlice } from "@reduxjs/toolkit"
// import { DEF_ITEM } from "../data/items";
const itemsSlice = createSlice({
    name: "items",
    // initialState: DEF_ITEM,
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            return action.payload;
        }
    }
});

export const itemsAction = itemsSlice.actions;
export default itemsSlice;