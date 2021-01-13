import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BookDetails from './pages/BookDetails/BookDetails';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import UsersService from './services/users.service';

const App = () => {
  useEffect(() => {
    UsersService.addUser({
      email: 'admin@mail.com',
      password: 'admin',
    })
  },[]);

  return (
    <>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route path={'/:bookId/details'} component={BookDetails}/>
      </Router>
    </>
  );
}

export default App;
