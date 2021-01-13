import React from 'react';
import SignupForm from '../../components/signup-form/signup-form.component';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const history = useHistory();

  const handleSignup = () => {
    history.push('/login');
  }

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-secondary">
        <div className="navbar-brand" >Reading Corner</div>
        <button type="button" className="btn btn-light" aria-label="Log in" onClick={handleSignup}>
          <span aria-hidden="true">Log in</span>
        </button>
      </nav>
      <div className="row">
        <SignupForm />
      </div>
    </div>
  );
}

export default Signup;