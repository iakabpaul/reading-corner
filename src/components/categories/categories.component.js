import React, { useState } from 'react';
import AddBookForm from 'components/add-book-form/add-book-form.component';

import './categories.style.scss';

const Categories = ({ addBook, categories = [], changeCategory }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    changeCategory(categoryId);
  };

  return (
    <div className="col-4">
      {categories.map(({ id, name }) => (
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${id === selectedCategoryId && 'active'}`}
          onClick={() => handleCategoryChange(id)}
          key={id}
        >
          {name}
          {/*<span className="badge badge-primary badge-pill">3</span>*/}
        </li>
      ))}
      <div className="input-group mb-3 my-category-section">
        <input
          type="text"
          className="form-control"
          placeholder="Book title"
        />
      </div>
      <AddBookForm addBook={addBook} categoryId={selectedCategoryId} />
    </div>
  );
};

export default Categories;
