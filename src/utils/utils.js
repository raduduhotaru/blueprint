export const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+[1-9]\d{10}$/;
    return phoneNumber.match(phoneNumberPattern);
  };