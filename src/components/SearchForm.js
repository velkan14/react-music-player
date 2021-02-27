import React, { useState } from "react";
import useMusicState from "./useMusicState";

const SearchForm = () => {
  // eslint-disable-next-line
  const {
    setTracks,
    toggleLoading,
    searchInput,
    setSearchInput,
  } = useMusicState();

  const updateInput = (event) => {
    setSearchInput(event.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    toggleLoading();
    fetch("https://itunes.apple.com/search?term=" + searchInput, {
      crossDomain: true,
      method: "Get",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        toggleLoading();
        setTracks(data.results);
      });
  };

  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={updateInput}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
