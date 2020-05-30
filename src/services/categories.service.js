import axios from 'axios';

const getCategories = () => axios.get('http://localhost:4000/statuses');

export default {
  getCategories,
}
