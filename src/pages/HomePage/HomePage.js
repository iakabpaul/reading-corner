import React, { useEffect, useState, useRef } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Categories from '../../components/categories/categories.component';
import BooksList from '../../components/books-list/books-list.component';
import CategoriesService from '../../services/categories.service';
import BooksService from '../../services/books.service';

import './HomePage.scss';

const HomePage = () => {
  const history = useHistory();
  const [cookies, setCookie, removeCookie] = useCookies(['name'])
  const [books, setBooks] = useState();
  const [categories, setCategories] = useState();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user-data')));
  const appRef = useRef({ selectedCategoryId: 0 });

  useEffect(() => {
    getBooks(appRef.current.selectedCategoryId, user.id);
  }, [history]);

  const addBook = (book) => {
    BooksService.addBook(book)
      .then(() => getBooks(appRef.current.selectedCategoryId, user.id))
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteBook = (bookId) => {
    BooksService.deleteBook(bookId)
      .then(() => getBooks(appRef.current.selectedCategoryId, user.id))
      .catch(function (error) {
        console.log(error);
      });
  };

  const getBooks = (categoriyId = 0, userId) => {
    BooksService.getBooks(categoriyId, userId)
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
    console.log(user.id);
    getBooks(0, user.id);
    getCategories();
  }, []);

  const changeCategory = categoryId => {
    getBooks(categoryId, user.id);
    appRef.current.selectedCategoryId = categoryId;
  };

  const handleLogout = () => {
    removeCookie('sessionId');
    localStorage.removeItem('user-data');

    history.push(`/login`);
  }

  if (!cookies?.sessionId || !localStorage.getItem('user-data')) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-secondary">
        <div className="navbar-brand" >Reading Corner</div>
        <button type="button" className="btn btn-light" aria-label="Log out" onClick={handleLogout}>
          <span aria-hidden="true">Log out</span>
        </button>
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

export default HomePage;
