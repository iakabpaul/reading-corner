import React, { useState } from 'react';
import AddBookForm from 'components/add-book-form/add-book-form.component';
import SearchBook from 'components/search-book.component/search-book.component';

import './categories.style.scss';

const Categories = ({ addBook, categories = [], changeCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedBook, setSelectedBook] = useState();

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    changeCategory(categoryId);
  };

  const handleBookSelection = book => setSelectedBook(book);

  return (
    <div className="col-4">
      {categories.map(({ id, name }) => (
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${id === selectedCategoryId && 'active'}`}
          onClick={() => handleCategoryChange(id)}
          key={id}
        >
          {name}
        </li>
      ))}
      <SearchBook selectBook={handleBookSelection} />
      <AddBookForm addBook={addBook} categoryId={selectedCategoryId} selectedBook={selectedBook}/>
    </div>
  );
};

export default Categories;
