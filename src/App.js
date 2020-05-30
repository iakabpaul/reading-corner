import React, { useEffect, useState, useRef } from 'react';
import Categories from './components/categories/categories.component';
import BooksList from './components/books-list/books-list.component';
import CategoriesService from './services/categories.service';
import BooksService from './services/books.service';

import './App.scss';

function App() {
  const [books, setBooks] = useState();
  const [categories, setCategories] = useState();
  const appRef = useRef({ selectedCategoryId: 0 });

  const addBook = (book) => {
    BooksService.addBook(book)
      .then(() => getBooks(appRef.current.selectedCategoryId))
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteBook = (bookId) => {
    BooksService.deleteBook(bookId)
      .then(() => getBooks(appRef.current.selectedCategoryId))
      .catch(function (error) {
        console.log(error);
      });
  };

  const getBooks = (categoriyId = 0) => {
    BooksService.getBooks(categoriyId)
      .then((response) => {
        setBooks([].concat(response.data || []));
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const getCategories = () => {
    CategoriesService.getCategories()
      .then((response) => {
        setCategories([].concat(response.data || []));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBooks();
    getCategories();
  }, []);

  const changeCategory = categoryId => {
    getBooks(categoryId);
    appRef.current.selectedCategoryId = categoryId;
  };

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-secondary">
        <div className="navbar-brand" >Reading Corner</div>
      </nav>
      <div className="row">
        <Categories
          addBook={addBook}
          categories={categories}
          changeCategory={changeCategory}
        />
        <BooksList books={books} deleteBook={deleteBook} />
      </div>
    </div>
  );
}

export default App;
