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
import TrackOverview from "../components/TrackOverview";

const MusicDetails = () => {
  return (
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
  );
};

export default MusicDetails;
