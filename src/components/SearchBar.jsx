import React, { useState } from "react";

function SearchBar() {
    const [keyword, setKeyword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("검색 기능은 추후 구현 예정입니다.");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="p-3 w-80 rounded-lg shadow border border-gray-300"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                검색
            </button>
        </form>
    );
}

export default SearchBar;
