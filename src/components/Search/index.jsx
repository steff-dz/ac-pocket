import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setQuery }) => {
  const [input, setInput] = useState("");
  const searchIcon = (
    <FontAwesomeIcon icon={faSearch} size="2x" color="black" />
  );

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    setQuery(input);
    setInput("");
  }
  return (
    <div className="flex mt-4 w-full justify-center">
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="h-12 w-80 p-4"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
