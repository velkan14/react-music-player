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

const MusicDetails = ({ match, history }) => {
  const trackId = parseInt(match.params.id);

  const {
    tracks,
    playTrack,
    nextTrack,
    previousTrack,
    togglePlay,
    isPlaying,
  } = useMusicState();

  const track = tracks.find((track) => {
    return track.trackId === trackId;
  });

  const trackIndex = tracks.findIndex((track) => {
    return track.trackId === trackId;
  });

  const onNextClick = () => {
    const nextIndex = trackIndex + 1;
    if (nextIndex < tracks.length) {
      history.push(`/music/${tracks[nextIndex].trackId}`);
      nextTrack();
    }
  };

  const onPreviousClick = () => {
    const previousIndex = trackIndex - 1;
    if (previousIndex >= 0) {
      history.push(`/music/${tracks[previousIndex].trackId}`);
      previousTrack();
    }
  };

  const onPlayClick = () => {
    if (isPlaying) togglePlay();
    else playTrack(trackIndex);
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
        {/*<button onClick={onPlayClick}>Play</button>*/}
      </section>

      <section>
        <button onClick={onPreviousClick}>Previous</button>
        <button onClick={onPlayClick}>{isPlaying ? "Pause" : "Play"}</button>
        <button onClick={onNextClick}>Next</button>
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
