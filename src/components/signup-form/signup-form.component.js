import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import UsersService from "../../services/users.service";

import './signup-form.styles.scss';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleNameChange = event => {
    setName(event.target.value);
    errorMessage && setErrorMessage(null);
  }

  const handleEmailChange = event => {
    setEmail(event.target.value);
    errorMessage && setErrorMessage(null);
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value);
    errorMessage && setErrorMessage(null);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const user = {
      name,
      email,
      password,
    }

    UsersService.addUser(user)
      .then((response) => {
        setValidated(true);
        setErrorMessage(null);
        history.push('/login');
      })
      .catch(function (error) {
        setErrorMessage('Something went wrong!');
        event.preventDefault();
        event.stopPropagation();
      })
  };

  return (
    <Form className="signup-form-section" validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          required
          value={name}
          onChange={handleNameChange}
        />
        <Form.Control.Feedback type="invalid">
          Please type in a valid email.
        </Form.Control.Feedback>
      </Form.Group>

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
          minlength={4}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign up
      </Button>
      {errorMessage &&
      <p className="error-message" style={{color:'red'}}>{errorMessage}</p>
      }
    </Form>
  )
};

export default SignupForm;
