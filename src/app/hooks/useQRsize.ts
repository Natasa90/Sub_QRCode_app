import { useState, useEffect } from "react";

export const useQrSize = () => {
    const [qrSize, setQrSize] = useState(256);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 480) {
                setQrSize(140); 
            } else if (width < 640) {
                setQrSize(160); 
            } else if (width < 768) {
                setQrSize(200); 
            } else {
                setQrSize(256); 
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return qrSize;
};
