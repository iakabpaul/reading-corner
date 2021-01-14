import React, {useEffect, useState} from 'react';

import './add-book-form.style.scss';

const AddBookForm = ({ addBook, categoryId, selectedBook }) => {
  const [title, setTitle] = useState(selectedBook?.title);
  const [author, setAuthor] = useState(selectedBook?.author);
  const [description, setDescription] = useState(selectedBook?.desc);
  const [image, setImage] = useState(selectedBook?.image);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user-data')));
  const [buttonDisabled, setButtonDisabled] = useState(!selectedBook);

  useEffect(() => {
    if (!selectedBook) return;

    const { title, author, description, image } = selectedBook;
    setTitle(title);
    setAuthor(author);
    setDescription(description);
    setImage(image);
  }, [selectedBook]);

  useEffect(() => {
    if (title && author && description) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [title, author, description]);

  const handleTitleChange = event => setTitle(event.target.value);

  const handleAuthorChange = event => setAuthor(event.target.value);

  const handleDescriptionChange = event => setDescription(event.target.value);

  const handleSubmit = () => {
    addBook({ author, description, title, status: categoryId, image, userId: user.id });
    setAuthor('');
    setTitle('');
    setDescription('');
  };

  return (
    <div className="my-form-section">
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
        type="button"
        className="btn btn-primary float-right"
        onClick={handleSubmit}
        disabled={buttonDisabled}
      >Add book</button>
    </div>
  )
};

export default AddBookForm;
