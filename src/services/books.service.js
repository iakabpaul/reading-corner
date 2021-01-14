import axios from 'axios';

const addBook = book => axios.post('http://localhost:4000/books', book);

const updateBook = (book, bookId) => axios.put(`http://localhost:4000/books/${bookId}`, book);

const deleteBook = bookId => axios.delete(`http://localhost:4000/books/${bookId}`);

const getBook = bookId => axios.get(`http://localhost:4000/books/${bookId}`);

const getBooks = (categoriyId, userId) => axios.get(`http://localhost:4000/books?status=${categoriyId}&userId=${userId}`);

export default {
  addBook,
  deleteBook,
  getBook,
  getBooks,
  updateBook,
}
