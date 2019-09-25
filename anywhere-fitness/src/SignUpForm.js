import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styled from "styled-components";

const validationSchema = yup.object().shape({
  userName: yup.string().required(),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8)
});

function SignUpForm(props) {
  return (
    <Formik
      initialValues={props.initialUserForm}
      validationSchema={validationSchema}
      onSubmit={props.onFormSubmit}
      render={props => {
        return (
          <Form>
            <Form.Group controlId="FormBasicName">
              <Form.Control type="firstname" placeholder="First Name" />
            </Form.Group>
            <Form.Group controlId="FormBasicName">
              <Form.Control type="lastname" placeholder="Last Name" />
            </Form.Group>
            <Form.Group controlId="FormBasicUsername">
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group controlId="FormBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="FormBasicPassword">
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Must be at least 8 characters.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="FormBasicCheckbox">
              <Form.Check type="checkbox" label="Accept Terms & Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Join
            </Button>
          </Form>
        );
      }}
    />
  );
}

export default SignUpForm;
