import React from 'react';
import './book-card.style.scss';

const BookCard = ({ author, title, description, deleteBook, id, image }) => {

  const handleDelete = () => deleteBook(id);

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-3 my-col">
          <img src={image || require('assets/img/book.png')} className="card-img" alt="..." />
        </div>
        <div className="col-md-8 my-col">
          <div className="card-body">
            <div className="my-card-content">
              <div className="my-card-header">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
              <h6 className="text-muted">{author}</h6>
              <p className="card-text">{description}</p>
            </div>
            <div className="my-button-container">
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
