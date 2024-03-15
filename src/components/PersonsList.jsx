import React, { useEffect } from "react";
import PersonForm from "./PersonForm";
import { Link, useParams } from "react-router-dom";
import { loadPersons } from "../store/ui-lst-persons/actions";
import root from "../store";
import { observer } from "mobx-react-lite";
import { requirePersonById } from "../store/persons/actions";
/* import { toJS } from "mobx"; */

const ListItem = observer(({ id }) => {
  const pers = requirePersonById(id);
  /* console.log("dd", toJS(pers)); */
  return (
    <div onClick={() => id} style={{ cursor: "pointer" }}>
      <Link to={`/persons/${id}`}>
        {pers.id}
        {pers.firstName}
        {pers.lastName}
        {pers.score}
      </Link>
    </div>
  );
});

const PersonsList = observer(() => {
  const { id } = useParams();

  useEffect(() => {
    loadPersons().catch(console.error);
  }, []);

  const ids = root.uiLstPersons.ids;
  /* console.log("id", toJS(ids)); */

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ flex: 1 }}>
        <h2>Left Side</h2>
        <div>
          {ids.map((id) => (
            <ListItem key={id} id={id} />
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h2>Right Side</h2>
        {/* Conditionally render the PersonForm component */}
        {id ? (
          <>
            <PersonForm id={id} />
          </>
        ) : (
          <h3>
            There is no Person selected, please click on the names from the Left
            Side
          </h3>
        )}
      </div>
    </div>
  );
});

export default PersonsList;
