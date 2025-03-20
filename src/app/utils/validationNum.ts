export const validatePhoneNumber = (number: string): boolean => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
};
