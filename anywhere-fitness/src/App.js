import React, { useState, useEffect } from "react";
import UserForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Axios from "axios";
import { Route, NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import img from "../src/img/fitnessAnywhere2.jpg";

const userApi = "https://anywhere-health.herokuapp.com/api/users/";

const initialUserForm = {
  uuid: "",
  username: ""
};

const initialSignUpForm = {
  id: "uuid",
  username: ""
  // email: "",
  // password: ""
};

const App = () => {
  const [users, setUsers] = useState(userApi);
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
  };
  const Submit = (values, actions) => {
    const newUser = {
      userName: userForm.userName,
      email: signUpForm.email,
      password: userForm.password
    };
    Axios.post(userApi, newUser)
      .then(res => {
        const newSignUp = users.concat(newUser);
        setUsers(newSignUp);
        setSignUpForm(initialSignUpForm);
        setUserForm(initialUserForm);
        actions.resetForm();
      })
      .catch(err => {});
  };

  return (
    <WrapDiv>
      <MainStyled>
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
              onFormSubmit={Submit}
              userForm={userForm}
              users={users}
            />
          )}
        />
        <div>
          <div>
            <h6>
              {" "}
              <Link to="/signUp"> Don't have an account? Join </Link>
            </h6>
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
              onFormSubmit={Submit}
              signUpForm={signUpForm}
            />
          )}
        />
      </MainStyled>
    </WrapDiv>
  );
};

export default App;

const WrapDiv = styled.div`
  border: 1px solid white;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 95vh;
  width: 100%;
`;

const NavBarStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 20px;
`;

const MainStyled = styled.main`
  width: 90vw;
  min-height: 40vh;
  max-width: 350px;
  border-radius: 5%;
  margin: 70px auto;
  background: #a9d3e9;
  padding: 15px;
  opacity: 0.95;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  &:hover {
    cursor: pointer;
    transform: translateY(10px);
    box-shadow: 2px 5px 6px -6px $raisin-black;
  }
`;
