import React, { useState } from 'react';
import "./searchBar.css";

const SearchBar = ({ setSearchTerm }) => {
  const handleName = (event) => {
    const { value } = event.target;
  console.log(event.target);
    setSearchTerm(value);
    console.log(value);
  };
  return (
    <div className='cajad'>
      <input type="text" placeholder='producto... ' onChange={handleName} />
    </div>
  );
};

export default SearchBar;
