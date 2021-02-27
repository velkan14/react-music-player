import React from "react";
import Navigation from "../components/Navigation";
import SearchForm from "../components/SearchForm";
import MusicList from "../components/MusicList";

const Home = ({ history }) => {
  return (
    <div className="Home">
      <Navigation />
      <SearchForm />
      <MusicList history={history} />
    </div>
  );
};

export default Home;
