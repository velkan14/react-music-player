import React from "react";
import { SearchForm, MusicList } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <main className="Home">
      <SearchForm />
      <MusicList />
    </main>
  );
};

export { Home };
