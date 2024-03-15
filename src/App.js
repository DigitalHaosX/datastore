import React from "react";
import "./App.css";
import PersonsList from "./components/PersonsList";
import LoadPersonsFromServer from "./components/LoadPersonsFromServer";

function App() {
  return (
    <div>
      <h1>Split Screen with Editable Scores</h1>
      <PersonsList />
      <LoadPersonsFromServer />
    </div>
  );
}

export default App;
