import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const handleSearch = e => {
    if (e.target.elements.searchInput.value.length > 0) {
      window.location =
        "https://www.google.com/search?sourceid=chrome&ie=UTF-8&q=" +
        e.target.elements.searchInput.value;
      e.preventDefault();
      e.target.elements.searchInput.value = "";
    }
  };

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="search__form">
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
        <input
          type="search"
          name="searchInput"
          placeholder="Search Google..."
          className="search__input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
