import React from "react";
import { Link } from "react-router-dom";
import useMusicState from "../components/useMusicState";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import "../styles/MusicDetails.css";

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
    <main className="MusicDetails">
      <Link to="/">
        <p>Go Back.</p>
      </Link>
      <section className="songDetails ma3 pa1">
        <div className="albumInfo ma1">
          <h2 className="ma3 pa1">{track.collectionName}</h2>
          <h4 className="ma2 pa1">
            {new Date(track.releaseDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h4>
        </div>
        <img
          className="ma2 pa1"
          src={track.artworkUrl100.replace("100x100bb.jpg", "400x400bb.jpg")}
          alt="Cover"
        />
        <p className="f3 ma1 b">{track.trackName}</p>
        <p className="f3 ma1 white-60">{track.artistName}</p>
        <p className="f3 ma1 white-60">{track.primaryGenreName}</p>
      </section>

      <section className="media f2">
        <button
          className="control ma2 pa2 br4"
          onClick={onPreviousClick}
          disabled={currentIndex === 0}
        >
          &#9194;
        </button>
        <button className="control ma2 pa2 br4" onClick={onPlayClick}>
          {isPlaying ? <span>&#9208;</span> : <span>&#9654;</span>}
        </button>
        <button
          className="control ma2 pa2 br4"
          onClick={onNextClick}
          disabled={currentIndex === tracks.length - 1}
        >
          &#9193;
        </button>
      </section>

      <section className="share ma3 pa3">
        <FacebookShareButton
          className="ma1 pa1"
          url="https://danielamado.dev"
          quote={`Listening to ${track.trackName} from ${track.artistName}`}
          hashtag={`#${track.artistName}`}
        >
          <FacebookIcon size={32} />
        </FacebookShareButton>
        <LinkedinShareButton
          className="ma1 pa1"
          url="https://danielamado.dev"
          title="Listening"
          summary={`${track.trackName} from ${track.artistName}`}
          source="https://danielamado.dev"
        >
          <LinkedinIcon size={32} />
        </LinkedinShareButton>
        <TwitterShareButton
          className="ma1 pa1"
          url="https://danielamado.dev"
          title="Listening Now"
          via={`${track.trackName} from ${track.artistName}`}
          hashtags={[track.artistName]}
        >
          <TwitterIcon size={32} />
        </TwitterShareButton>
      </section>
    </main>
  );
};

export default MusicDetails;
