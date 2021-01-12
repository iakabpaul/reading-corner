import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import UsersService from "../../services/users.service";

import './login-form.styles.scss';
import {useHistory} from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies(['name']);
  const history = useHistory();

  const handleUsernameChange = event => setUsername(event.target.value);

  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = () => {
    UsersService.login(username, password)
      .then((response) => {
        setCookie('sessionId', response.data.accessToken);
        console.log(cookies);
        history.push('/home')
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  return (
    <div className="login-form-section">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary float-right"
        onClick={handleSubmit}
        disabled={false}
      >Login</button>
    </div>
  )
};

export default LoginForm;
