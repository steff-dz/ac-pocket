import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const searchIcon = (
    <FontAwesomeIcon icon={faSearch} size="2x" color="black" />
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log("button clicked");
  }
  return (
    <div className="flex mt-4 w-full justify-center">
      <form onSubmit={(e) => handleSubmit}>
        <input
          className="h-12 w-80 p-4"
          type="text"
          placeholder="search for a villager or type here"
        />
        <button className="pl-4" type="submit">
          {searchIcon}
        </button>
      </form>
    </div>
  );
};

export default Search;
