import React, { useEffect, useState } from 'react'
import BookCard from "../../components/book-card/book-card.component";
import BooksService from "../../services/books.service";

const BookDetails = ({match: { params }}) => {
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(params.bookId);
  }, [])

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
    title
  } = book;

  return (
    <BookCard
      author={author}
      deleteBook={deleteBook}
      description={description}
      detailed
      id={id}
      image={image}
      title={title}
    />
  )
};

export default BookDetails;