import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { validatePhoneNumber } from "../../utils/utils";

export const Entry = ({ person, onEditPhoneNumber, currentAgenda }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(person.phoneNumber);

  const handleEditClick = (currentNumber) => {
    setPhoneNumber(currentNumber);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    const isValidPhoneNumber = validatePhoneNumber(phoneNumber);
    if (!isValidPhoneNumber) {
      toast.error(
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

    onEditPhoneNumber(phoneNumber, person.id);
    setIsEditing(false);
    toast.success("Phone number updated successfully!");
  };

  const truncateNotes = (notes) => {
    if (notes.length > 26) {
      return notes.slice(0, 26) + "...";
    }
    return notes;
  };

  return (
    <tr
      className={`hover:bg-[#3F4E4F] items-center text-center rounded-md border-b border-[#3F4E4F] border-1 h-10`}
    >
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.company}</td>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="h-10 text-center rounded-md outline outline-[#DCD7C9]"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        ) : (
          person.phoneNumber
        )}
      </td>
      <td>{truncateNotes(person.notes)}</td>
      <td>
        {isEditing ? (
          <div className="flex items-center justify-center gap-x-1">
            <button
              className="bg-green-500 hover:bg-green-600 text-black w-20 text-sm rounded-md h-8"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-black w-20 text-sm rounded-md h-8"
              onClick={handleCancelClick}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 w-40 text-black h-8 px-2 rounded-md text-sm"
            onClick={() => handleEditClick(person.phoneNumber)}
          >
            Edit Phone Number
          </button>
        )}
      </td>
      <td>
        <Link
          to={{
            pathname: "/details",
            search: `?firstName=${person.firstName}&lastName=${person.lastName}&company=${person.company}&phoneNumber=${person.phoneNumber}&notes=${person.notes}`,
          }}
          className="flex text-center text-sm items-center justify-center bg-[#DCD7C9] hover:bg-[#DCD7C9]/90 text-black rounded-md h-8 px-2"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};
