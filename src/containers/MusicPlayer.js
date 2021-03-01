import React from "react";
import Sound from "react-sound";
import useMusicState from "./useMusicState";

const MusicPlayer = () => {
  // eslint-disable-next-line
  const { tracks, currentIndex, isPlaying, nextTrack } = useMusicState();

  if (currentIndex < 0) return null;

  const track = tracks[currentIndex];

  const handleSongFinishedPlaying = () => {
    nextTrack();
  };

  return (
    <Sound
      url={track.previewUrl}
      playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
      onFinishedPlaying={handleSongFinishedPlaying}
    />
  );
};

export default MusicPlayer;
