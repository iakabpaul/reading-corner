import React from 'react';
import LoginForm from 'components/login-form/login-form.component';

const Login = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-secondary">
        <div className="navbar-brand" >Reading Corner</div>
      </nav>
      <div className="row">
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;