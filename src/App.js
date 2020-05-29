import React from 'react';
import Categories from './components/categories/categories.component';
import BooksList from './components/books-list/books-list.component';

import './App.scss';

function App() {
  return (
    <div className="container">
      <nav class="navbar navbar-dark bg-secondary">
        <div class="navbar-brand" >Reading Corner</div>
      </nav>
      <div className="row">
        <Categories />
        <BooksList />
      </div>
    </div>
  );
}

export default App;
