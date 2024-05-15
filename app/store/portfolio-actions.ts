import { Dispatch } from "redux";

import { portfolioActions } from "./portfolio-slice";

export const fetchData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                `https://portfoliov2-b0eed-default-rtdb.firebaseio.com/generalData.json`,
            );

            const data = await response.json();

            return data;
        };

        try {
            const data = await fetchData();
            if (data) {
                dispatch(portfolioActions.replaceData(data));
            }
        } catch (error) {
            console.error(error);
        }
    };
};
