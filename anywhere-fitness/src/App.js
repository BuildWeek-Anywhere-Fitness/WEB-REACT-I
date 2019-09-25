import React, { useState } from "react";
import UserForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Axios from "axios";
import { Route, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import img from "../src/img/fitnessAnywhere2.jpg";

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

const Content = styled.div`
    border: 1px solid #000;
    background-image: url(${img});
    background-size: cover; 
    background-position:center;
    min-height: 100vh;
  width: 1400px;
`;

const initialUsers = [
  {
    id: 1,
    username: "jims"
  },
  {
    id: 2,
    username: "jimss"
  },
  {
    id: 3,
    username: "dan"
  }
];
const initialUserForm = {
  id: "",
  username: ""
};

const initialSignUpForm = {
  id: "uuid",
  username: "",
  email: "",
  password: ""
};

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [userForm, setUserForm] = useState(initialUserForm);
  const [signUpForm, setSignUpForm] = useState(initialSignUpForm);

  const onUserNameChange = e => {
    setUserForm({ ...userForm, userName: e.target.value });
  };
  const onEmailChange = e => {
    setSignUpForm({ ...signUpForm, email: e.target.value });
  };
  const onPasswordChange = e => {
    setUserForm({ ...userForm, password: e.target.value });
    // const onDetailChange = e => {
    //   setUserForm({...teamForm, [e.target.id]: e.target.value});
    //
  };
  const onFormSubmit = e => {
    e.preventDefault();
    const newUser = {
      userName: userForm.userName,
      email: signUpForm.email,
      password: userForm.password
    };
    const newSignUp = users.concat(newUser);
    setUsers(newSignUp);
    setSignUpForm(initialSignUpForm);
    setUserForm(initialUserForm);
  };

  return (
    <Content>
    <main>
      <NavBarStyled>
        <NavLink
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "#0069d9",
            fontFamily: "ABeeZee"
          }}
        >
          <h5> SIGN IN </h5>
        </NavLink>
        <NavLink
          to="/signUp"
          activeStyle={{
            fontWeight: "bold",
            color: "white",
            fontFamily: "ABeeZee"
          }}
        >
          <h5> JOIN </h5>
        </NavLink>
      </NavBarStyled>
      <Route
        exact
        path="/"
        render={props => (
          <UserForm
            onUserNameChange={onUserNameChange}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            // onDetailChange={onDetailChange}
            onFormSubmit={onFormSubmit}
            userForm={userForm}
            users={users}
          />
        )}
      />
      <div>
        <div>
          <h6> <Link to="/signUp" > Don't have an account? Join </Link> </h6>
        </div>
      </div>
      <Route
        exact
        path="/signUp"
        render={props => (
          <SignUpForm
            onUserNameChange={onUserNameChange}
            onEmailChange={onEmailChange}
            onPasswordChange={onPasswordChange}
            // onDetailChange={onDetailChange}
            onFormSubmit={onFormSubmit}
            signUpForm={signUpForm}
          />
        )}
      />
    </main>
    </Content>
  );
};

export default App;
