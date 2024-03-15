import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PersonsList from "./components/PersonsList";
import PersonWrapper from "./components/PersonWrapper";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/persons" element={<PersonsList />}>
          <Route path=":id" element={<PersonWrapper />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);
