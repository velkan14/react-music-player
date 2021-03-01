import React from "react";
import { formatMillis, formatDate, formatPrice } from "../utils/Format";
import "../styles/TrackOverview.css";

const TrackOverview = ({ track }) => {
  return (
    <section className="TrackOverview ma1 ">
      <div>
        <h2 className="ma1 pa1">{track.collectionName}</h2>
        <h4 className="ma1 pa1">{formatDate(track.releaseDate)}</h4>
      </div>
      <img
        className="ma2 pa1"
        src={track.artworkUrl100.replace("100x100bb.jpg", "400x400bb.jpg")}
        alt="Cover"
      />
      <div className="songDetails">
        <div className="detailsLeft ma3 pa2">
          <p className="f3 ma1 b">{track.trackName}</p>
          <p className="f3 ma1 white-60">{track.artistName}</p>
          <p className="f3 ma1 white-60">{track.primaryGenreName}</p>
        </div>
        <div className="detailsRight ma3 pa2">
          <p className="f5 ma1 white-60">
            {formatPrice(
              track.trackPrice ? track.trackPrice : track.collectionPrice,
              track.currency
            )}
          </p>
          <p className="f5 ma1 white-60">
            {track.trackTimeMillis
              ? String(formatMillis(track.trackTimeMillis))
              : ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackOverview;
