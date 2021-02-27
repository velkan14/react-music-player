import React, { useState, createContext } from "react";

export const MusicContext = createContext();

export const MusicProvider = (props) => {
  const [state, setState] = useState({
    tracks: [],
    isLoading: false,
    player: new Audio(),
    isPlaying: false,
    currentIndex: -1,
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      {props.children}
    </MusicContext.Provider>
  );
};
