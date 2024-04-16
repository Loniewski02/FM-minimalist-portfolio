"use client";

import { usePathname } from "next/navigation";

const PortfolioItem = () => {
    const pathname = usePathname();

    //tests
    return <h1>{pathname}</h1>;
};

export default PortfolioItem;
