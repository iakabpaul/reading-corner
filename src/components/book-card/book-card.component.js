import React, { useState, useEffect } from 'react';
import './book-card.style.scss';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useHistory } from 'react-router-dom';
import { FormControl } from 'react-bootstrap'
import BooksService from '../../services/books.service';

const BookCard = ({ author, title, description, deleteBook, id, image, detailed = false, userId, status }) => {
  const history = useHistory();
  const [descr, setDescr] = useState(description);

  useEffect(() => {
    setDescr(description);
  }, [description])

  const handleDelete = () => deleteBook(id);

  const handleDescriptionChange = event => setDescr( event.target.value);

  const navigateToDetails = () => {
    history.push(`/${id}/details`);
  }

  const updateBook = () => {
    const book = {
      author,
      description: descr,
      image,
      status,
      title,
      userId,
    }

    BooksService.updateBook(book, id)
      .then(() => {})
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3 my-col">
          <img
            alt="..."
            className="card-img"
            onClick={navigateToDetails}
            src={image || require('assets/img/book.png')}
          />
        </div>
        <div className="col-md-8 my-col">
          <div className="card-body">
            <div className="my-card-content">
              <div className="my-card-header">
                <h5 className="card-title">{title}</h5>
              </div>
              <h6 className="text-muted">{author}</h6>
              {detailed ? (
                <FormControl
                  as="textarea"
                  aria-label="With textarea"
                  className="card-text"
                  onBlur={updateBook}
                  onChange={handleDescriptionChange}
                  value={descr}
                />
              ): (
                <p className="card-text">{description}</p>
              )}
            </div>
            <div className={`my-button-container ${detailed ? 'detailed' : ''}`}>
              {detailed && (
                <FacebookShareButton
                  url={window.location.href}
                  quote={"Reading Corner - For book lovers"}
                  hashtag="#readingcorner"
                  className=""
                >
                  <FacebookIcon size={26} />
                </FacebookShareButton>
              )}
              <button type="button" className="btn btn-danger" aria-label="Close" onClick={handleDelete}>
                <span aria-hidden="true">Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
