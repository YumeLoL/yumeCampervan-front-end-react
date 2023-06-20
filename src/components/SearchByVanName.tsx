import React from 'react';

const SearchByVanName = () => {
  const handleInput = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        placeholder="Search for van"
        className="px-4 py-2 my-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        onChange={handleInput}
      />
    </div>
  );
};

export default SearchByVanName;
