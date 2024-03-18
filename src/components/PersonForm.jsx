import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { requirePersonById } from "../store/persons/actions";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Input, InputNumber, Button, Form } from "antd";

const PersonForm = () => {
  const { id } = useParams(); // Get the selected person's ID from the route params
  const [form] = Form.useForm();
  const pers = requirePersonById(id);
  console.log("pers in form", toJS(pers));

  useEffect(() => {
    const person = requirePersonById(id);

    // Set form values when data is loaded
    form.setFieldsValue({
      firstName: person.firstName,
      lastName: person.lastName,
      score: person.score,
    });
  }, [id, form]);

  /* console.log("primit din store", person.id, person.lastName); */

  const handleSave = (values) => {
    pers.setFirstName(values.firstName);
    pers.setLastName(values.lastName);
    pers.setScore(values.score);
    /* const pers = { firstName, lastName, score }; */
    console.log("saved pers info form", pers);
  };

  return (
    <Form form={form} onFinish={handleSave}>
      <Form.Item label="First Name" name='firstName'>
        <Input />
      </Form.Item>
      <Form.Item label="Last Name" name='lastName'>
        <Input />
      </Form.Item>
      <Form.Item label="Score" name='score'>
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
