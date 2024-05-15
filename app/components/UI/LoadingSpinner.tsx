import React from "react";

const LoadingSpinner = () => {
    return (
        <div className="flex h-[150px] items-center justify-center">
            <div className=" h-14 w-14 animate-spin rounded-full border-[4px] border-l-Cyan" />
        </div>
    );
};

export default LoadingSpinner;
