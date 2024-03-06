import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/tailwind.css";
import { AgendaDetails } from "./components/agenda";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Agenda } from "./pages/Agenda";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Agenda />} />
        <Route path="/details" element={<AgendaDetails />} />
      </Routes>
      <ToastContainer toastStyle={{ backgroundColor: "#3F4E4F" }} />
    </Router>
  );
}

export default App;
