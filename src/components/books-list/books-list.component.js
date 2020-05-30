import React, { useState, useEffect } from 'react';
import BookCard from 'components/book-card/book-card.component';

import './book-list.style.scss';

const BooksList = ({ books = [], deleteBook }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [books])

  const getPaginationItems = noOfPages => {
    const items = [];
    for(let i = 1; i <= noOfPages; i++) {
      items.push(<li className={`page-item ${currentPage === i && 'active'}`}><a className="page-link">{i}</a></li>)
    }

    return items;
  };

  const handleNextPage = () => setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => setCurrentPage(currentPage - 1);

  const renderPagination = (noOfItems) => {
    let noOfPages = Math.ceil(noOfItems / 3)

    if (noOfPages < 2) return;

    return (
      <ul className="pagination justify-content-center my-pagination">
        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
          >Previous</button>
        </li>
        {getPaginationItems(noOfPages)}
        <li className={`page-item ${currentPage === noOfPages && 'disabled'}`}>
          <button
            disabled={currentPage === noOfPages}
            className={"page-link"}
            onClick={handleNextPage}
          >Next</button>
        </li>
      </ul>
    );
  }

  return (
    <div className="col">
      <div className="list-group my-list-group">
        {books.slice((currentPage - 1) * 3, currentPage * 3).map(({ title, author, description, id }) => (
          <BookCard title={title} author={author} description={description} deleteBook={deleteBook} id={id} key={id} />
        ))}
      </div>
      {renderPagination(books.length)}
    </div>
  );
};

export default BooksList;
