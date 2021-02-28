import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import useMusicState from "../components/useMusicState";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

const MusicDetails = () => {
  const {
    tracks,
    playTrack,
    currentIndex,
    nextTrack,
    previousTrack,
    togglePlay,
    isPlaying,
  } = useMusicState();

  const track = tracks[currentIndex];

  const onNextClick = () => {
    nextTrack();
  };

  const onPreviousClick = () => {
    previousTrack();
  };

  const onPlayClick = () => {
    if (isPlaying) togglePlay();
    else playTrack(currentIndex);
  };

  if (track === undefined) {
    return (
      <div className="MusicDetails">
        <p>No music selected. </p>
        <Link to="/">Go back home.</Link>
      </div>
    );
  }
  return (
    <div className="MusicDetails">
      <Navigation />
      <section>
        <h2>{track.collectionName}</h2>
        <h5>
          {new Date(track.releaseDate).toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </h5>
        <img src={track.artworkUrl100} alt="Cover" />
        <h2>{track.trackName}</h2>
        <h5>{track.artistName}</h5>
      </section>

      <section>
        <button onClick={onPreviousClick} disabled={currentIndex === 0}>
          &#9194;
        </button>
        <button onClick={onPlayClick}>
          {isPlaying ? <span>&#9208;</span> : <span>&#9654;</span>}
        </button>
        <button
          onClick={onNextClick}
          disabled={currentIndex === tracks.length - 1}
        >
          &#9193;
        </button>
      </section>

      <section>
        <button>Share</button>
        <div>
          <FacebookShareButton
            url="https://danielamado.dev"
            quote={`Listening to ${track.trackName} from ${track.artistName}`}
            hashtag={`#${track.artistName}`}
          >
            <FacebookIcon size={32} />
          </FacebookShareButton>
          <LinkedinShareButton
            url="https://danielamado.dev"
            title="Listening"
            summary={`${track.trackName} from ${track.artistName}`}
            source="https://danielamado.dev"
          >
            <LinkedinIcon size={32} />
          </LinkedinShareButton>
          <TwitterShareButton
            url="https://danielamado.dev"
            title="Listening Now"
            via={`${track.trackName} from ${track.artistName}`}
            hashtags={[track.artistName]}
          >
            <TwitterIcon size={32} />
          </TwitterShareButton>
        </div>
      </section>
    </div>
  );
};

export default MusicDetails;
