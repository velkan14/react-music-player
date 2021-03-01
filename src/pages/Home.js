import React from "react";
import SearchForm from "../components/SearchForm";
import MusicList from "../components/MusicList";
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
