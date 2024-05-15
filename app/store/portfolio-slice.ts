import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    projects: generalData[];
} = {
    projects: [],
};

const portfolioSlice = createSlice({
    name: "subscription",
    initialState: initialState,
    reducers: {
        replaceData(state, action) {
            state.projects = [...action.payload];
        },
    },
});

export const portfolioActions = portfolioSlice.actions;
export default portfolioSlice;
