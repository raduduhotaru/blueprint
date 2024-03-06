import React from "react";
import { useLocation } from "react-router-dom";
import { Company, Notes, Phone } from "./icons";

export const EntryDetails = () => {
  const location = useLocation();

  const firstName = new URLSearchParams(location.search).get("firstName");
  const lastName = new URLSearchParams(location.search).get("lastName");
  const company = new URLSearchParams(location.search).get("company");
  const phoneNumber = new URLSearchParams(location.search).get("phoneNumber");
  const notes = new URLSearchParams(location.search).get("notes");

  return (
    <div className="flex flex-col m-5 sm:m-16">
      <h2 className="text-6xl font-normal capitalize mb-3">
        {firstName} {lastName.toUpperCase()}
      </h2>
      <div className="flex items-center gap-x-2 mb-3">
        <Phone />+{phoneNumber}
      </div>
      <div className="flex items-center gap-x-2 mb-3">
        <Company />
        {company}
      </div>
      <div className="flex items-center gap-x-2">
        <Notes />
        {notes}
      </div>
    </div>
  );
};
