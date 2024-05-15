import { useState, useCallback } from "react";

const useFetch = () => {
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = useCallback(async (url: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setIsLoading(false);
    }, []);

    return {
        isLoading: isLoading,
        sendRequest: sendRequest,
    };
};

export default useFetch;
