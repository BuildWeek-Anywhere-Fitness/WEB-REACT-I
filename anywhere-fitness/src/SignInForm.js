import App from "./App";
import React, { useState, useEffect } from "react";
import {
  Formik,
  Form as FormFormik,
  Field,
  ErrorMessage,
  FieldArray
} from "formik";
import * as yup from "yup";
import { Button, FormGroup, FormControl } from "react-bootstrap";
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
          <FormFormik>
            <Form.Group controlId="FormBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control name="name" type="name" placeholder="Username" />
              <ErrorMessage name="name" component="div" />
            </Form.Group>

            <Form.Group controlId="FormBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage name="password" component="div" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </FormFormik>
        );
      }}
    />
  );
}

export default UserForm;
