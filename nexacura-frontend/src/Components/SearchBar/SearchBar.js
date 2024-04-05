/**
 * The SearchBar component in React renders a search input field with a search icon button.
 * @returns The `SearchBar` component is being returned. It consists of a search input field with a
 * placeholder "Search" and a search button with a search icon from `react-icons/fi` library.
 */
import React from "react";
import { FiSearch } from "react-icons/fi"; // Importing the search icon from react-icons/fi

function SearchBar() {
  return (
    <div className="relative max-w-sm border border-gray-200 rounded-sm">
      <input className="w-full py-2 px-8" type="search" placeholder="Search" />
      <button className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-700  rounded-r-md hover:bg-gray-200 focus:outline-none ">
        {/* Using the search icon component */}
        <FiSearch className="h-4 w-4" />
      </button>
    </div>
  );
}

export default SearchBar;
