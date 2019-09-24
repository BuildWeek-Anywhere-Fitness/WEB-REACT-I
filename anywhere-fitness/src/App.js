import React, { useState } from "react";
import UserForm from "./Form";
import Axios from "axios";

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

const App = () => {
  const [users, setUsers] = useState(initialUsers);
  const [userForm, setUserForm] = useState(initialUserForm);

  const onNameChange = e => {
    setUserForm({ ...userForm, name: e.target.value });
  };
  const onEmailChange = e => {
    setUserForm({ ...userForm, email: e.target.value });
  };
  const onPasswordChange = e => {
    setUserForm({ ...userForm, role: e.target.value });
    // const onDetailChange = e => {
    //   setUserForm({...teamForm, [e.target.id]: e.target.value});
    //
  };
  const onFormSubmit = e => {
    // e.preventDefault();
    const newUser = {
      name: userForm.name,
      email: userForm.email,
      password: userForm.password
    };
    const newSignUp = users.concat(newUser);
    setUsers(newSignUp);

    setUserForm(initialUserForm);
  };

  return (
    <div>
      {!users.username && (
        <div>
          <h2>SIGN IN</h2>
        </div>
      )}
      <div>
        <UserForm
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onPasswordChange={onPasswordChange}
          // onDetailChange={onDetailChange}
          onFormSubmit={onFormSubmit}
          userForm={userForm}
          users={users}
        />
      </div>
      {users.map(el => (
        <h3 key={el.id}>{el.username} is a User</h3>
      ))}
    </div>
  );
};

export default App;
