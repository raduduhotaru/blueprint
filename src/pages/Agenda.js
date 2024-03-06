import React, { useState, useEffect } from "react";
import { AddEntryModal } from "../components/modals";
import { EntriesTable } from "../components/agenda";
import data from "../mockData/data.json"; // Import JSON data directly
import { AgendaPlaceholder } from "../components/placeholders";

export const Agenda = () => {
  const [agendaData, setAgendaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "firstName",
    direction: "asc",
  });
  const [selectedCompany, setSelectedCompany] = useState("");
  const uniqueCompanies = [
    ...new Set(agendaData.map((person) => person.company)),
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneSuggestions, setPhoneSuggestions] = useState([]);
  const [nameSuggestions, setNameSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate a short delay in order to display the placeholders
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setAgendaData(data); // Set data directly from imported JSON file
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (agendaData.length === 0) {
    return <AgendaPlaceholder />;
  }

  const handleOpenModal = () => {
    setPhoneSuggestions([]);
    setNameSuggestions([]);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSavePerson = (newPerson) => {
    // Add the new person to the agendaData state
    setAgendaData((prevData) => [...prevData, newPerson]);
    // Close the modal
    handleCloseModal();
  };

  const handleEditPhoneNumber = (id, newPhoneNumber) => {
    setAgendaData((prevData) =>
      prevData.map((person, i) =>
        person.id === id ? { ...person, phoneNumber: newPhoneNumber } : person
      )
    );
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedPersons = [...agendaData].sort((a, b) => {
    if (sortConfig.key !== null) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredPersons = sortedPersons.filter((person) => {
    const { firstName, lastName, company, phoneNumber, notes } = person;
    const searchValue = searchTerm.toLowerCase();
    const companyValue = selectedCompany.toLowerCase();
    return (
      (selectedCompany === "" || company.toLowerCase() === companyValue) && // Filter by selected company
      (firstName.toLowerCase().includes(searchValue) ||
        lastName.toLowerCase().includes(searchValue) ||
        company.toLowerCase().includes(searchValue) ||
        phoneNumber.toLowerCase().includes(searchValue) ||
        notes.toLowerCase().includes(searchValue))
    );
  });

  // Function to filter phone number suggestions based on selected company
  const handlePhoneSuggestions = (value) => {
    let filteredNumbers;
    if (selectedCompany === "") {
      filteredNumbers = agendaData
        .map((person) => person.phoneNumber)
        .filter((number) => number.includes(value))
        .slice(0, 5); // Limit the suggestions to 5
    } else {
      filteredNumbers = agendaData
        .filter(
          (person) =>
            person.company.toLowerCase() === selectedCompany.toLowerCase()
        )
        .map((person) => person.phoneNumber)
        .filter((number) => number.includes(value))
        .slice(0, 5); // Limit the suggestions to 5
    }
    setPhoneSuggestions(filteredNumbers);
  };

  // Function to filter name suggestions based on selected company
  const handleNameSuggestions = (value) => {
    let filteredNames;
    if (selectedCompany === "") {
      filteredNames = agendaData
        .map((person) => `${person.lastName}`)
        .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5); // Limit the suggestions to 5
    } else {
      filteredNames = agendaData
        .filter(
          (person) =>
            person.company.toLowerCase() === selectedCompany.toLowerCase()
        )
        .map((person) => `${person.lastName}`)
        .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5); // Limit the suggestions to 5
    }
    setNameSuggestions(filteredNames);
  };

  return (
    <div className="container mx-auto mt-14">
      <h1 className="text-3xl font-bold mb-4">Phonebook Agenda</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            if (e.target.value.length > 0) {
              handlePhoneSuggestions(e.target.value);
              handleNameSuggestions(e.target.value);
            } else {
              setPhoneSuggestions([]);
              setNameSuggestions([]);
            }
          }}
          className="border border-black outline-none w-96 h-8 rounded px-2 py-1 mb-4"
        />
        {/* Display phone number suggestions */}
        {searchTerm && phoneSuggestions.length > 0 && (
          <div className="absolute top-36 w-96 rounded-md bg-white text-black">
            <ul>
              {phoneSuggestions.map((number, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearchTerm(number);
                    setPhoneSuggestions([]);
                  }}
                  className="hover:bg-gray-200 hover:cursor-pointer p-2 rounded-md"
                >
                  {number}
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Display name suggestions */}
        {searchTerm && nameSuggestions.length > 0 && (
          <div className="absolute top-36 w-96 rounded-md bg-white text-black">
            <ul>
              {nameSuggestions.map((name, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearchTerm(name);
                    setNameSuggestions([]);
                  }}
                  className="hover:bg-gray-200 hover:cursor-pointer p-2 rounded-md"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="border border-black outline-none w-44 h-8 rounded px-2 py-1 ml-2 mb-4"
        >
          <option value="">All Companies</option>
          {uniqueCompanies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
        <button
          className="ml-auto text-white w-40 h-8 rounded-md bg-[#A27B5C] hover:bg-[#A27B5C]/80"
          onClick={handleOpenModal}
        >
          Add New Person
        </button>
      </div>
      <EntriesTable
        agenda={agendaData}
        filteredPersons={filteredPersons}
        handleSort={handleSort}
        sortConfig={sortConfig}
        handleEditPhoneNumber={handleEditPhoneNumber}
      />
      {filteredPersons.length === 0 && (
        <div className="w-full h-8 text-xl font-bold py-10 text-center">
          No results.
        </div>
      )}
      <AddEntryModal
        currentAgenda={agendaData}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSavePerson}
      />
    </div>
  );
};
