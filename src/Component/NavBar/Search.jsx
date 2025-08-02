import React, { useEffect, useState } from "react";

const Search = ({ MainData, setProductData }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (Array.isArray(MainData)) {
      const tempArray = MainData.filter(
        (item) =>
          (item.name &&
            item.name.toLowerCase().includes(search.toLowerCase())) ||
          (item.mealType &&
            Array.isArray(item.mealType) &&
            item.mealType[0] &&
            item.mealType[0].toLowerCase().includes(search.toLowerCase()))
      );
      setProductData(tempArray);
    }
  }, [search, MainData, setProductData]);

  return (
    <div className="flex items-center w-full max-w-sm mx-auto transition-all duration-300 ease-in-out bg-white rounded-full shadow-md focus-within:ring-2 focus-within:ring-orange-500 focus-within:shadow-lg hover:shadow-xl">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 text-sm text-gray-700 bg-transparent outline-none rounded-l-full"
        placeholder="Search for food..."
      />
      <div className="flex items-center justify-center h-full px-3 py-2 text-base text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
