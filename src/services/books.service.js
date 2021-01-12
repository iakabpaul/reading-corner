import axios from 'axios';

const addBook = book => axios.post('http://localhost:4000/books', book);

const deleteBook = bookId => axios.delete(`http://localhost:4000/books/${bookId}`);

const getBook = bookId => axios.get(`http://localhost:4000/books/${bookId}`);

const getBooks = categoriyId => axios.get(`http://localhost:4000/books?status=${categoriyId}`);

export default {
  addBook,
  deleteBook,
  getBook,
  getBooks,
}
