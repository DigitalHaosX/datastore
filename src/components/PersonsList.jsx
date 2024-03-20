import React, { useEffect } from "react";
import PersonForm from "./PersonForm";
import { Link, useParams } from "react-router-dom";
import { loadPersons } from "../store/ui-lst-persons/actions";
import root from "../store";
import { observer } from "mobx-react-lite";
import { requirePersonById } from "../store/persons/actions";
import { Row, Col } from "antd";

const ListItem = observer(({ id }) => {
  const pers = requirePersonById(id);

  return (
    <Col span={12}>
      <div onClick={() => id} style={{ cursor: "pointer", marginBottom: 10 }}>
        <Link to={`/persons/${id}`}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* Modified line to wrap ID and name in a flex container */}
            <div
              style={{ border: "2px", color: pers.team, marginRight: "10px" }}
            >
              {pers.id}
            </div>
            <div>
              {pers.firstName} {pers.lastName} {pers.score} {pers.team}
            </div>
          </div>
        </Link>
      </div>
    </Col>
  );
});

const PersonsList = observer(({ selectedColor, updateIdColor }) => {
  const { id } = useParams();

  useEffect(() => {
    loadPersons().catch(console.error);
  }, []);

  const ids = root.uiLstPersons.ids;

  const handleColorUpdate = (id, color) => {
    updateIdColor(id, color);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <h2 style={{ color: "blue", border: "1px solid blue", padding: "5px" }}>
          Left Side
        </h2>
        <div>
          {ids.map((id) => (
            <ListItem key={id} id={id} />
          ))}
        </div>
      </Col>
      <Col span={12}>
        <h2 style={{ color: "red", border: "1px solid red", padding: "5px" }}>
          Right Side
        </h2>
        {/* Conditionally render the PersonForm component */}
        {id ? (
          <>
            <PersonForm
              key={id}
              id={id}
              selectedColor={selectedColor}
              updateColor={handleColorUpdate}
            />
          </>
        ) : (
          <h3>
            There is no Person selected, please click on the names from the Left
            Side
          </h3>
        )}
      </Col>
    </Row>
  );
});

export default PersonsList;
