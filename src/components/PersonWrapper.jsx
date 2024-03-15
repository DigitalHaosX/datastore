import React from "react";
import { useParams } from "react-router-dom";
import PersonForm from "./PersonForm";
import getPersons from "../modules/persons";

const PersonWrapper = () => {
  const { id } = useParams(); // Get the ID from the URL params

  // Function to find person by ID
  const findPersonById = (id) => {
    const allPersons = getPersons();
    if (!Array.isArray(allPersons)) {
      console.error("Persons data is not an array");
      return null;
    }

    return allPersons.find((person) => person.id === parseInt(id));
  };

  // Find the person object based on the ID
  const person = findPersonById(id);

  // Define the handleScoreChange function
  const handleScoreChange = (id, newScore) => {
    // Implement your logic to handle score change here
    console.log("Handle score change:", id, newScore);
  };

  // Render the PersonForm component with the dynamically fetched person details
  return (
    <PersonForm person={person} handleScoreChange={handleScoreChange} id={id} />
  );
};

export default PersonWrapper;
