import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { MusicProvider } from "./components/MusicContext";
import Routes from "./routes";
import MusicPlayer from "./components/MusicPlayer";
import Navigation from "./components/Navigation";

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
