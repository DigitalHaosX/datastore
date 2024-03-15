import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { requirePersonById } from "../store/persons/actions";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";

const PersonForm = () => {
  const { id } = useParams(); // Get the selected person's ID from the route params

  const pers = requirePersonById(id);
  console.log("pers in form", toJS(pers));

  const [person, setPerson] = useState(null);
  const [firstName, setFirstName] = useState(pers.firstName);

  const [lastName, setLastName] = useState(pers.lastName);
  const [score, setScore] = useState(pers.score);

  /* const person = requirePersonById(id); */

  useEffect(() => {
    // Load person data when component mounts or when ID changes
    setPerson(requirePersonById(id));
  }, [id]);

  /* console.log("primit din store", person.id, person.lastName); */

  const handleSave = (e) => {
    e.preventDefault();
    pers.setFirstName(firstName);
    pers.setLastName(lastName);
    pers.setScore(score);
    /* const pers = { firstName, lastName, score }; */
    console.log("saved pers info form", pers);
  };

  // If person data is not loaded yet, return null
  if (!person) {
    return null;
  }

  // Destructure person object to get first name, last name, and score
  /*   const { firstName, lastName, score } = person; */

  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)} // Update name state on change
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)} // Update surname state on change
        />
      </label>
      <label>
        Score:
        <input
          type="number"
          value={score}
          min="0"
          max="100"
          onChange={(e) => setScore(e.target.value)}
        />
        %
      </label>
      <button onClick={handleSave}>SAVE</button>
    </form>
  );
};

export default observer(PersonForm);
