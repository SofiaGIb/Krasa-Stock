import React, { useState } from 'react';
import "./searchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  const handleName = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };
  return (
    <div className='cajad'>
      <input type="text" placeholder='producto... ' onChange={handleName} />
    </div>
  );
};

export default SearchBar;
