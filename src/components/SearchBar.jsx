import React from "react";

function SearchBar() {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="검색창"
        className="border px-4 py-2 rounded w-64"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        검색창 버튼
      </button>
    </div>
  );
}

export default SearchBar;
