import { useContext } from "react";
import { MusicContext } from "./MusicContext";

const useMusicState = () => {
  const [state, setState] = useContext(MusicContext);

  const { isPlaying, player, currentIndex } = state;

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
    if (isPlaying) {
      player.pause();
    } else {
      player.play();
    }
    setState({ ...state, isPlaying: !isPlaying });
  };

  const playTrack = (index) => {
    setState({
      ...state,
      currentIndex: index,
      isPlaying: true,
    });
  };

  const nextTrack = () => {
    setState({
      ...state,
      currentIndex: currentIndex + 1,
    });
  };

  const previousTrack = () => {
    setState({
      ...state,
      currentIndex: currentIndex - 1,
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
  };
};

export default useMusicState;
