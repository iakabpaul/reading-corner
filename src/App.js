import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Categories from './components/categories/categories.component';
import BooksList from './components/books-list/books-list.component';

import './App.scss';

function App() {
  const [books, setBooks] = useState();

  const getBooks = (categoriyId = 0) => {
    axios.get(`http://localhost:4000/books?status=${categoriyId}`)
      .then((response) => {
        setBooks([].concat(response.data || []));
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  useEffect(() => {
    getBooks();
  }, []);

  const changeCategory = categoryId => getBooks(categoryId);

  return (
    <div className="container">
      <nav class="navbar navbar-dark bg-secondary">
        <div class="navbar-brand" >Reading Corner</div>
      </nav>
      <div className="row">
        <Categories changeCategory={changeCategory} />
        <BooksList books={books}/>
      </div>
    </div>
  );
}

export default App;
