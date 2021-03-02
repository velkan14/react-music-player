import { useContext } from "react";
import { MusicContext } from "../../components";

const useMusicState = () => {
  const [state, setState] = useContext(MusicContext);

  const { tracks, isPlaying, currentIndex } = state;

  const setTracks = (newTracks) => {
    setState((prevState) => ({
      ...prevState,
      tracks: newTracks,
      isPlaying: false,
    }));
  };

  const toggleLoading = () => {
    setState((prevState) => ({
      ...prevState,
      isLoading: !prevState.isLoading,
    }));
  };

  const togglePlay = () => {
    setState({ ...state, isPlaying: !isPlaying });
  };

  const setCurrentTrack = (index) => {
    setState({
      ...state,
      currentIndex: index,
    });
  };

  const playTrack = (index) => {
    setState({
      ...state,
      currentIndex: index,
      isPlaying: true,
    });
  };

  const nextTrack = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < tracks.length) {
      setState({
        ...state,
        currentIndex: nextIndex,
      });
    } else {
      setState({
        ...state,
        currentIndex: 0,
        isPlaying: false,
      });
    }
  };

  const previousTrack = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex >= 0) {
      setState({
        ...state,
        currentIndex: nextIndex,
      });
    }
  };

  const setSearchInput = (input) => {
    setState({
      ...state,
      searchInput: input,
    });
  };

  return {
    ...state,
    setTracks,
    toggleLoading,
    togglePlay,
    playTrack,
    nextTrack,
    previousTrack,
    setCurrentTrack,
    setSearchInput,
  };
};

export { useMusicState };
