import React, { useState } from "react";
import { Modal } from "../modal";
import { toast } from "react-toastify";
import { validatePhoneNumber } from "../../utils/utils";

export const AddEntryModal = ({ isOpen, onClose, onSave, currentAgenda }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [notes, setNotes] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const handleSave = () => {
    const isValidPhoneNumber = validatePhoneNumber(phoneNumber);
    if (!isValidPhoneNumber) {
      setPhoneNumberError(
        "Invalid phone number format. It should start with your country code (e.g. +4) followed by 10 digits"
      );
      return;
    }

    const isDuplicate = currentAgenda.some((person) => {
      const trimmedPhoneNumber = person.phoneNumber.trim();
      return trimmedPhoneNumber === phoneNumber.trim();
    });

    if (isDuplicate) {
      toast.error("This phone number is already registered in your agenda!");
      return;
    }

    onSave({ firstName, lastName, company, phoneNumber, notes });
    resetData();
    onClose();
    toast.success("Person added succesfully!");
  };

  const resetData = () => {
    setFirstName("");
    setLastName("");
    setCompany("");
    setPhoneNumber("");
    setNotes("");
    setPhoneNumber("");
  };

  return (
    <Modal
      isModalOpen={isOpen}
      setModalOpen={() => {
        onClose();
        resetData();
      }}
    >
      <div>
        <div className="">
          <div className="flex">
            <h3 className="text-2xl font-thin mb-5">Add New Person</h3>
            <button
              className="ml-auto bg-red-500 w-5 h-5 pb-1 hover:cursor-pointer items-center flex items-center text-center justify-center rounded-full"
              onClick={() => {
                onClose();
                resetData();
              }}
            >
              ×
            </button>
          </div>
          <div className="mb-5">
            <div className="flex flex-col sm:flex-row sm:gap-x-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full h-8 border border-cyan-900 rounded-md mb-2 p-2"
                value={firstName}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
                  setFirstName(newValue);
                }}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full h-8 border border-cyan-900 rounded-md mb-2 p-2"
                value={lastName}
                onChange={(e) => {
                  const newValue = e.target.value.replace(/[^a-zA-Z\s]/g, ""); // Allow only letters and spaces
                  setLastName(newValue);
                }}
              />
            </div>
            <input
              type="text"
              placeholder="Company Name"
              className="w-full h-8 border border-cyan-900 rounded-md mb-2 p-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              className={`w-full h-8 border ${
                phoneNumberError ? "border-red-500" : "border-cyan-900"
              } rounded-md mb-2 p-2`}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {phoneNumberError && (
              <p className="text-red-500 text-xs">{phoneNumberError}</p>
            )}
            <input
              type="text"
              placeholder="Notes"
              className="w-full h-8 border border-cyan-900 rounded-md mb-2 p-2"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button
              className={`border border-black w-full h-8 rounded-md mt-auto ${
                !firstName || !lastName || !company || !phoneNumber || !notes
                  ? "cursor-not-allowed bg-[#A27B5C]/40 text-gray-500"
                  : "bg-[#A27B5C]"
              }`}
              onClick={handleSave}
              disabled={
                !firstName || !lastName || !company || !phoneNumber || !notes
              }
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
