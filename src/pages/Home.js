import React from "react";
import SearchForm from "../containers/SearchForm";
import MusicList from "../containers/MusicList";
import "../styles/Home.css";

const Home = ({ history }) => {
  return (
    <main className="Home">
      <SearchForm />
      <MusicList history={history} />
    </main>
  );
};

export default Home;
