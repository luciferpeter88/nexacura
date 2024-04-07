import React from "react";
import { FiSearch } from "react-icons/fi"; // Imports the FiSearch icon from react-icons for the search button.

/**
 * The SearchBar component renders a simple search input field with an integrated search icon button.
 * It is designed with a maximum width and rounded borders, incorporating a hover effect for the button
 * for better user interaction. The component leverages the FiSearch icon to visually indicate the search
 * functionality and enhances usability by providing a clear, dedicated search area.
 */
function SearchBar() {
  return (
    <div className="relative max-w-sm border border-gray-200 rounded-sm">
      {/* Input field for search queries. */}
      <input className="w-full py-2 px-8" type="search" placeholder="Search" />
      {/* Search button with embedded FiSearch icon. */}
      <button className="absolute inset-y-0 left-0 flex items-center px-2 text-gray-700 rounded-r-md hover:bg-gray-200 focus:outline-none">
        <FiSearch className="h-4 w-4" />{" "}
        {/* Renders the search icon within the button. */}
      </button>
    </div>
  );
}

export default SearchBar;
