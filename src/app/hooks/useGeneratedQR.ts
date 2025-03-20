import { useState } from "react";
import { useFormReset } from "./useFormReset";

export const useGenerateQRCode = () => {
    const [qrCode, setQrCode] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");

    const {
        phoneNum,
        setPhoneNum,
        phoneNumError,
        setPhoneNumError,
        isSubmitted,
        setIsSubmitted,
        resetForm
    } = useFormReset();

    const generateQRCode = async (phoneNumber: string) => {
        setIsLoading(true);
        setError(""); 
        try {
            const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${phoneNumber}&size=256x256`);
            if (response.ok) {
                const qrCodeUrl = response.url;
                setQrCode(qrCodeUrl);
                setIsSubmitted(true);
            } else {
                setError("Failed to generate QR code.");
            }
        } catch (error) {
            setError("An error occurred while generating the QR code.");
        } finally {
            setIsLoading(false);
        }
    };

    const resetQRCode = () => {
        setQrCode(null); 
    };

    return {
        qrCode,
        isLoading,
        error,
        generateQRCode,
        phoneNum,
        setPhoneNum,
        phoneNumError,
        setPhoneNumError,
        isSubmitted,
        setIsSubmitted,
        resetForm,
        resetQRCode
    };
};
