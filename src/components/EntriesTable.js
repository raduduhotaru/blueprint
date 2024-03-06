// EntriesTable.jsx
import React from "react";
import { Entry } from "./Entry";

export const EntriesTable = ({
  filteredPersons,
  handleSort,
  sortConfig,
  handleEditPhoneNumber,
}) => {
  return (
    <table className="table-auto w-full">
      <thead className="">
        <tr className="bg-[#A27B5C] h-10">
          <th onClick={() => handleSort("firstName")}>
            First Name
            <span className="hover:cursor-pointer">
              {sortConfig.direction === "asc" ? " ▲" : " ▼"}
            </span>
          </th>
          <th onClick={() => handleSort("lastName")}>
            Last Name
            <span className="hover:cursor-pointer">
              {sortConfig.direction === "asc" ? " ▲" : " ▼"}
            </span>
          </th>
          <th onClick={() => handleSort("company")}>
            Company
            <span className="hover:cursor-pointer">
              {sortConfig.direction === "asc" ? " ▲" : " ▼"}
            </span>
          </th>
          <th onClick={() => handleSort("phoneNumber")}>
            Phone Number
            <span className="hover:cursor-pointer">
              {sortConfig.direction === "asc" ? " ▲" : " ▼"}
            </span>
          </th>
          <th onClick={() => handleSort("notes")}>
            Notes
            <span className="hover:cursor-pointer">
              {sortConfig.direction === "asc" ? " ▲" : " ▼"}
            </span>
          </th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filteredPersons.map((person, index) => (
          <Entry
            key={index}
            person={person}
            onEditPhoneNumber={(newPhoneNumber) =>
              handleEditPhoneNumber(index, newPhoneNumber)
            }
          />
        ))}
      </tbody>
    </table>
  );
};
