import React from 'react';
import LoginForm from 'components/login-form/login-form.component';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleSignup = () => {
    history.push('/signup');
  }

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-secondary">
        <div className="navbar-brand" >Reading Corner</div>
        <button type="button" className="btn btn-light" aria-label="Sign up" onClick={handleSignup}>
          <span aria-hidden="true">Sign up</span>
        </button>
      </nav>
      <div className="row">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;