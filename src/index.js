import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonsList from "./components/PersonsList";
import PersonFormDetails from "./components/PersonFormDetails";
import PersonForm from "./components/PersonForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="" element={<App />}>
        <Route path="persons" element={<PersonsList />} />
        <Route path="persons/:id" element={<PersonForm />} />
        <Route path="persons/:id/base-data" element={PersonFormDetails} />
        <Route path="persons/:id/adresa" element={PersonFormDetails} />
        <Route path="persons/:id/studii" element={PersonFormDetails} />
      </Route>
    </Routes>
  </Router>
);
