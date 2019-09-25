import App from "./App";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";

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
            <div>
              {/* <label> user name </label> */}
              <Field name="username" type="text" placeholder="Username" />
              <ErrorMessage name="name" component="div" />
            </div>
            <div>
              {/* <label> email </label> */}
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div>
              {/* <label> password </label> */}
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div>
              <button type="submit"> Submit </button>
            </div>
          </Form>
        );
      }}
    />
  );
}

export default SignUpForm;