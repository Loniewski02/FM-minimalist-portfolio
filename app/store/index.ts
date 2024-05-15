import { configureStore } from "@reduxjs/toolkit";

import portfolioSlice from "./portfolio-slice";

export const store = configureStore({
    reducer: {
        portfolio: portfolioSlice.reducer,
    },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
