import axios from 'axios';

const addUser = user => axios.post('http://localhost:4000/register', user);

const login = (email, password) => axios.post('http://localhost:4000/login/', {email, password})

export default {
  addUser,
  login,
}
