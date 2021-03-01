import React from "react";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { MusicProvider } from "./containers/MusicContext";
import MusicPlayer from "./containers/MusicPlayer";
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
