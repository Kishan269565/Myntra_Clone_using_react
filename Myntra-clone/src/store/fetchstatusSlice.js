import { createSlice } from "@reduxjs/toolkit"
const fetchStatusSlice = createSlice({
    name: "fetchstatus",
    initialState: {
        fetchdone: false,
        currentlyfetching: false,

    },
    reducers: {
        markfetchingDone: (state) => {
            state.fetchdone = true;
        },
        markfetchingstarted: (state) => {
            state.currentlyfetching = true;
        },
        markfetchingFinished: (state) => {
            state.currentlyfetching = false;
        }
    }
});

export const fetchstatusAction = fetchStatusSlice.actions;
export default fetchStatusSlice;