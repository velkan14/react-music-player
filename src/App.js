import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { MusicProvider, MusicPlayer, Navigation } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <MusicProvider>
          <Navigation />
          <Routes />
          <MusicPlayer />
        </MusicProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
