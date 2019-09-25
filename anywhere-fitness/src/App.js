import React, { useState } from "react";
import UserForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Axios from "axios";
import { Route, NavLink } from "react-router-dom";


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
  id: '',
  username: ""
};

const initialSignUpForm = {
  id: 'uuid',
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
    // e.preventDefault();
    const newUser = {
      userName: userForm.userName,
      email: signUpForm.email,
      password: userForm.password
    };
    const newSignUp = users.concat(newUser);
    setUsers(newSignUp);

    setUserForm(initialUserForm);
  };

  return (
    <div>
      {/* {!users.username && (
        <div>
          <h2>SIGN IN</h2>
        </div>
      )} */}
      <div>
        <NavLink to="/signIn">Sign In</NavLink>
        <NavLink to="/signUp">JOIN FOR FREE ! </NavLink>

        <Route exact path="/signIn"
        render={props => <UserForm
          onUserNameChange={onUserNameChange}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          // onDetailChange={onDetailChange}
          onFormSubmit={onFormSubmit}
          userForm={userForm}
          users={users}
        />}
        />
        <div>
      {/* {!users.username && (
        <div>
          <h2> JOIN FOR FREE !</h2>
        </div>
      )} */}
      </div>
        <Route exact path="/signUp" render={props => <SignUpForm
          onUserNameChange={onUserNameChange}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          // onDetailChange={onDetailChange}
          onFormSubmit={onFormSubmit}
          signUpForm={signUpForm}
        />}
        />
      </div>
      {users.map(el => (
        <h3 key={el.id}>{el.username} is a User</h3>
      ))}
    </div>
  );
};

export default App;
