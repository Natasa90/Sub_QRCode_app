import { useState } from "react";

export const useFormReset = () => {
    const [phoneNum, setPhoneNum] = useState<string>("");
    const [phoneNumError, setPhoneNumError] = useState<string>("");
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const resetForm = () => {
        setPhoneNum("");
        setPhoneNumError("");
        setIsSubmitted(false); 
    };

    return {
        phoneNum,
        setPhoneNum,
        phoneNumError,
        setPhoneNumError,
        isSubmitted,
        setIsSubmitted,
        resetForm
    };
};
