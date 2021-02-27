import React, { useState, createContext } from "react";

export const MusicContext = createContext();

export const MusicProvider = (props) => {
  const [state, setState] = useState({
    tracks: [],
    isLoading: false,
    isPlaying: false,
    currentIndex: -1,
    searchInput: "",
  });

  return (
    <MusicContext.Provider value={[state, setState]}>
      {props.children}
    </MusicContext.Provider>
  );
};
