import React, { useState } from 'react';

import './add-book-form.style.scss';

const AddBookForm = ({ addBook, categoryId }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = event => setTitle(event.target.value);

  const handleAuthorChange = event => setAuthor(event.target.value);

  const handleDescriptionChange = event => setDescription(event.target.value);

  const handleSubmit = () => addBook({ author, description, title, status: categoryId });

  return (
    <form className="my-form-section" onSubmit={handleSubmit}>
      <label>Add a book:</label>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
      </div>
      <div className="form-group">
          <textarea
            className="form-control"
            id="description"
            rows="3"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
      </div>
      <button
        type="submit"
        className="btn btn-primary float-right"
      >Add book</button>
    </form>
  )
};

export default AddBookForm;
