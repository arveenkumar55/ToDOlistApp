import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="mt-3">
      <input
        type="text"
        placeholder="Search TODOs..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '12px', borderRadius: '8px', border: '1px solid #d0d0d0', width: '100%' }}
      />
    </div>
  );
};

export default SearchBar;
