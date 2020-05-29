import React from 'react';
import BookCard from 'components/book-card/book-card.component';

import './book-list.style.scss';

const renderPagination = () => (
  <ul className="pagination justify-content-center ">
    <li className="page-item disabled">
      <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item active" aria-current="page">
      <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
    </li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
);

const BooksList = ({ books = [] }) => (
  <div className="col">
    <div className="list-group">
      {books.map(({ title, author }) => (
        <BookCard title={title} author={author} />
      ))}
    </div>
  {renderPagination()}
  </div>
);

export default BooksList;
