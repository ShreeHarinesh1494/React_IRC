// SearchBar.js
import React from 'react';
import '../Assests/css/search.css'; // Adjust the path based on your project structure
import search from '../Assests/images/search.jpg'; // Import your search icon image

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
 
      />
      <button className='cs' type="button">Search</button>
    </div>
  );
};

export default SearchBar;
