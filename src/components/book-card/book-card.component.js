import React from 'react';
import './book-card.style.scss';

const BookCard = () => {

  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div class="col-md-3">
          <img src={require('assets/img/book.png')} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="my-card-header">
              <h5 className="card-title">Card title</h5>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <div className="my-button-container">
              <button type="button" class="btn btn-danger" aria-label="Close">
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
