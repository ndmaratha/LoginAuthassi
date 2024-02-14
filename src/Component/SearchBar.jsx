import React, { useState } from 'react';

const SearchBar = ({ onChange }) => {
    const [search,setSearch]=useState()
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button onClick={()=>filterData(search,product)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
