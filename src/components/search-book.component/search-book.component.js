import React, { useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import axios from 'axios';

const SeachBook = ({ selectBook }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);

  const handleSearch = (searchText) => {
    setIsLoading(true);
    const searchParam = searchText.replace(/\s+/, '+');

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchParam}`)
      .then((response) => {
        const options = response.data.items.map(({ volumeInfo: { title, authors, description, imageLinks } }, index) => ({
          id: index.toString(),
          title,
          author: authors && authors[0],
          description,
          image: imageLinks && imageLinks.thumbnail,
        }));

        setOptions(options);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const setSelected = (selectedItems) => {
    const { title, author, description, image } = selectedItems[0];
    selectBook({
      author,
      description,
      title,
      image,
    })
  };

  return (
    <div className="input-group mb-3 my-category-section">
      <AsyncTypeahead
        id="search-book"
        isLoading={isLoading}
        filterby={['id']}
        labelKey="title"
        minLength={2}
        onSearch={handleSearch}
        onChange={setSelected}
        options={options}
        placeholder="Search for a book..."
        renderMenuItemChildren={(option, props) => (
          <div>
            <img
              src={option.image}
              style={{
                height: '24px',
                marginRight: '10px',
              }}
            />
            <span>{option.title}</span>
            <span>{option.description}</span>
          </div>
        )}
      />
    </div>
  );
};

export default SeachBook;
