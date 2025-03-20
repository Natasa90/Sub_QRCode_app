"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { validatePhoneNumber } from "@/app/utils/validationNum";
import { useGenerateQRCode } from "@/app/hooks/useGeneratedQR";
import QRCode from "react-qr-code";
import { useQrSize } from "@/app/hooks/useQRsize";

export const SubForm = () => {
    const {
        qrCode,
        isLoading,
        error,
        generateQRCode,
        phoneNum,
        setPhoneNum,
        phoneNumError,
        setPhoneNumError,
        isSubmitted,
        resetForm,
        resetQRCode,
    } = useGenerateQRCode();

    const qrSize = useQrSize();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validatePhoneNumber(phoneNum)) {
            setPhoneNumError("Please enter a valid phone number.");
            return;
        }
        setPhoneNumError("");
        generateQRCode(phoneNum);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-6">
            <div className="flex flex-col wrap w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl border-4 border-pink-600">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-6">
                    Enter Your Phone Number
                </h2>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6"
                >
                    <div>
                        <Input
                            type="text"
                            placeholder="Enter your phone number"
                            value={phoneNum}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPhoneNum(e.target.value)}
                            className={`w-full p-4 border-2 rounded-xl transition-all
                                placeholder:text-sm
                                sm:placeholder:text-base
                                md:placeholder:text-lg
                              ${
                                phoneNumError
                                    ? "border-red-500 bg-red-50"
                                    : "border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                              }`}
                            disabled={isSubmitted || isLoading}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full py-3 px-6 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-all"
                        disabled={isLoading || isSubmitted}
                    >
                        {isLoading
                            ? "Generating QR Code..."
                            : isSubmitted
                            ? "QR Code Generated"
                            : "Submit"}
                    </Button>
                </form>
                {phoneNumError && (
                    <div className="text-red-500 text-sm mt-4 text-center">
                        {phoneNumError}
                    </div>
                )}
                {qrCode && !isLoading && (
                    <div className="flex flex-col items-center mt-8">
                        <h3 className="text-xl mb-4 text-gray-800">
                            Scan the QR Code:
                        </h3>
                        <QRCode value={qrCode} size={qrSize} />
                        <Button
                            className="mt-6 w-full py-3 px-6 bg-gray-400 text-white font-semibold rounded-xl hover:bg-gray-500"
                            onClick={() => {
                                resetQRCode();
                                resetForm();
                            }}
                        >
                            Generate New QR Code
                        </Button>
                    </div>
                )}
                {error && (
                    <div className="text-red-500 text-sm mt-4 text-center">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
};
