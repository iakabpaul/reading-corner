import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import BookCard from '../../components/book-card/book-card.component';
import BooksService from '../../services/books.service';

import './BookDetails.scss';

const BookDetails = ({match: { params }}) => {
  const [book, setBook] = useState({});
  const history = useHistory();

  useEffect(() => {
    getBook(params.bookId);
  }, [])

  const handleBack = () => {
    history.goBack();
  }

  const getBook = (bookId = 0) => {
    BooksService.getBook(bookId)
      .then((response) => {
        setBook(response.data || {});
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  const {
    author,
    deleteBook,
    description,
    id,
    image,
    title,
    status,
    userId,
  } = book;

  return (
    <div className="container">
      <nav className="navbar navbar-dark bg-secondary">
        <button type="button" className="btn btn-light" aria-label="Back" onClick={handleBack}>
          <span aria-hidden="true">Back</span>
        </button>
        <div className="navbar-brand" >Reading Corner</div>
      </nav>
      <div className="details">
        <BookCard
          author={author}
          deleteBook={deleteBook}
          description={description}
          detailed
          id={id}
          image={image}
          title={title}
          userId={userId}
          status={status}
        />
      </div>
    </div>
  )
};

export default BookDetails;