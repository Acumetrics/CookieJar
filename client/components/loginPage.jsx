import React, { useState } from 'react';
import Axios from 'axios';

function LoginPage() {
  // React hooks for state management
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const register = () => {
    Axios({
      method: 'POST',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: '/register',
    }).then((res) => {console.log(res); console.log(res.request.responseURL); return res.request.responseURL})
    .then(url => {window.location.href = url});
  };

  const login = () => {
    Axios({
      method: 'POST',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:3000/login',
    }).then((res) => console.log(res));
  };

  return (
    <div className="App">
      <div className="LoginComponent">
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button type="button" onClick={register}>Submit</button>
      </div>

      <div className="LoginComponent">
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button type="button" onClick={login}>Submit</button>
      </div>
    </div>
  );
}

export default LoginPage;
