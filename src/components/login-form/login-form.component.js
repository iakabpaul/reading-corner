import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import UsersService from "../../services/users.service";

import './login-form.styles.scss';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [cookies, setCookie] = useCookies(['name']);
  const history = useHistory();

  const handleEmailChange = event => {
    setEmail(event.target.value);
    errorMessage && setErrorMessage(null);
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value);
    errorMessage && setErrorMessage(null);
  }

  const getUserData = email => UsersService.getUser(email)
    .then((response) => {
      localStorage.setItem('user-data', JSON.stringify(response.data[0]));
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    UsersService.login(email, password)
      .then((response) => {
        setCookie('sessionId', response.data.accessToken);
        getUserData(email);
        setErrorMessage(null);
        setValidated(true);
        history.push('/home')
      })
      .catch(function (error) {
        console.log(error);
        setErrorMessage('Wrong email or password');
        event.preventDefault();
        event.stopPropagation();
      })
  };

  return (
    <Form className="login-form-section" validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <Form.Control.Feedback type="invalid">
          Please type in a valid email.
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      {errorMessage &&
      <p className="error-message" style={{color:'red'}}>{errorMessage}</p>
      }
    </Form>
  )
};

export default LoginForm;
