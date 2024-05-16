import { createSlice } from "@reduxjs/toolkit";

const initialState: {
    projects: generalData[];
    previewImg: string;
    isModal: boolean;
} = {
    projects: [],
    previewImg: "",
    isModal: false,
};

const portfolioSlice = createSlice({
    name: "subscription",
    initialState: initialState,
    reducers: {
        replaceData(state, action) {
            state.projects = [...action.payload];
        },
        showModal(state, action) {
            state.previewImg = action.payload;
            state.isModal = true;
        },
        hideModal(state) {
            state.isModal = false;
        },
    },
});

export const portfolioActions = portfolioSlice.actions;
export default portfolioSlice;
