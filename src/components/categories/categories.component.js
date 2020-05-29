import React, { useState } from 'react';

const categoriesMock = [{
    id: 0,
    label: 'Read',
  }, {
    id: 1,
    label: 'Reading'
  }, {
    id: 2,
    label: 'Want to read'
  }];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="col-4">
      {categoriesMock.map(({ id, label }) => (
        <li
          className={`list-group-item d-flex justify-content-between align-items-center ${id === selectedCategory && 'active'}`}
          onClick={() => setSelectedCategory(id)}
        >
          {label}
          <span className="badge badge-primary badge-pill">3</span>
        </li>
      ))}
    </div>
  );
};

export default Categories;
