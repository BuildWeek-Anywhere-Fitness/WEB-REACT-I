import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Form as FormFormik, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Form  from "react-bootstrap/Form";
import styled from "styled-components";

const validationSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
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
          <FormFormik noValidate>
            <Form.Group controlId="validationFormik01">
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                // value={values.firstName}
                // isValid={touched.firstName && !errors.firstName}
              />
            </Form.Group>
            <Form.Group controlId="validationFormik02">
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last Name"
                // value={values.firstName}
                // isValid={touched.lastName && !errors.lastName}
              />
            </Form.Group>
            <Form.Group controlId="ValidationFormikUsername">
              <Form.Control
                name="username"
                type="username"
                placeholder="Username"
                // value={values.firstName}
                // isInValid={touched.username && !errors.username}
              />
            </Form.Group>
            <Form.Group controlId="ValidationFormikEmail">
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="ValidationFormikPassword">
              <Form.Control type="password" placeholder="Password" />
              <Form.Text className="text-muted">
                Must be at least 8 characters.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="FormBasicCheckbox">
              <Form.Check type="checkbox" label="Accept Terms & Conditions" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </FormFormik>
        );
      }}
    />
  );
}

export default SignUpForm;
