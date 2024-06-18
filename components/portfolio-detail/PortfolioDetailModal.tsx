"use client";
import { motion } from "framer-motion";

const PortfolioDetailModal = () => {
    return (
        <>
            <motion.section
                initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
                animate={{ scale: 1, opacity: 1, transition: { delay: 0.2 } }}
                exit={{ scale: 0, opacity: 0 }}
                className="fixed left-1/2 top-1/2 z-50 flex w-full max-w-[1024px] -translate-x-1/2 -translate-y-1/2 flex-col items-center px-6"
            >
                {/* <button className="self-end bg-GraylishDarkBlue py-1 px-2 text-White">
                    Close
                </button> */}
                <div className="max-h-[400px] overflow-x-hidden md:max-h-[500px]">
                    <img src={"image"} alt="" className="object-cover" />
                </div>
            </motion.section>
            <motion.div
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { type: "tween" } }}
                exit={{ y: "-100%", opacity: 0, transition: { delay: 0.2 } }}
                // onClick={onClose}
                className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-[#0000007b] backdrop-blur-md"
            />
        </>
    );
};

export default PortfolioDetailModal;
