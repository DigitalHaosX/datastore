import React from "react";
import { useParams } from "react-router-dom";
import { requirePersonById } from "../store/persons/actions";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Input, InputNumber, Button, Form } from "antd";
import TeamInput from "./TeamInput";

const PersonForm = ({ selectedColor, updateColor }) => {
  const { id } = useParams();
  const pers = requirePersonById(id);
  console.log("pers in form", toJS(pers));

  const initialValues = {
    firstName: pers.firstName,
    lastName: pers.lastName,
    score: pers.score,
    team: pers.team,
  };

  const handleSave = (values) => {
    pers.setFirstName(values.firstName);
    pers.setLastName(values.lastName);
    pers.setScore(values.score);
    pers.setTeam(values.team);
    console.log("saved pers info form", pers);
    if (selectedColor) {
      updateColor(id, selectedColor);
    }
  };

  const handleTeamChange = (value) => {
    // Implement logic to handle team changes here
    console.log("Selected team:", value);
  };

  return (
    <Form initialValues={initialValues} onFinish={handleSave}>
      <Form.Item label="Echipa" name="team">
        <TeamInput
          value={initialValues.team}
          onChange={(value) => handleTeamChange(value)}
        />
      </Form.Item>
      <Form.Item label="First Name" name="firstName">
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name="lastName">
        <Input />
      </Form.Item>
      <Form.Item label="Score" name="score">
        <InputNumber min={0} max={100} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          SAVE
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(PersonForm);
