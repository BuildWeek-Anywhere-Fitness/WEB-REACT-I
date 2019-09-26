import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";


const validationSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8)
});

function UserForm(props) {
  return (
    <Formik
      initialValues={props.initialUserForm}
      validationSchema={validationSchema}
      onSubmit={props.onFormSubmit}
      render={props => {
        return (
          <Form>
            {/* <div>
              <label> name </label>
              <Field name="name" type="text" placeholder="username" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              <Field name="password" type="password" placeholder="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
            <Button type="submit" variant="primary" size="sm"> Submit </Button>
            </div> */}
            <Form.Group controlId="FormBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control name="name" type="name" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="FormBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        );
      }}
    />
  );
}

export default UserForm;
