import React from "react";
import { useMusicState } from "../../hooks";
import "./SearchForm.css";

const SearchForm = () => {
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
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        toggleLoading();
        setTracks(data.results);
      });
  };

  return (
    <form className="SearchForm ma2 pa3 f4" onSubmit={onSearch}>
      <input
        className="ma2 pa2 ba br2 b--white-50"
        type="text"
        placeholder="Search..."
        value={searchInput}
        onChange={updateInput}
      />
      <button className="ma2 pa2 br2">Search</button>
    </form>
  );
};

export { SearchForm };
