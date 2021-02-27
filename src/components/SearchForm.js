import React, { useState } from "react";
import useMusicState from "./useMusicState";

const SearchForm = () => {
  const [input, setInput] = useState("");

  // eslint-disable-next-line
  const { setTracks, toggleLoading } = useMusicState();

  const updateInput = (event) => {
    setInput(event.target.value);
  };

  const onSearch = (input) => {
    toggleLoading();
    fetch("https://itunes.apple.com/search?term=" + input, {
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

  const searchMusic = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={searchMusic}>
      <input
        type="text"
        placeholder="Search..."
        value={input}
        onChange={updateInput}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
