import React from "react";
import "../styles/TrackView.css";

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const TrackView = ({ track, onClick }) => {
  let price = "0.0";
  if (track.trackPrice < 0) price = "-";
  else {
    const formated = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: track.currency,
    }).format(track.trackPrice ? track.trackPrice : track.collectionPrice);
    price = String(formated);
  }

  const date = new Date(track.releaseDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="card " onClick={() => onClick(track)}>
      <div className="ma2">
        <img src={track.artworkUrl60} alt="Cover"></img>
      </div>
      <div className="info">
        <p className="f5 b">{track.trackName}</p>
        <p className="f5 white-60">{track.artistName}</p>
        <p className="f5 white-60">{track.collectionName}</p>
      </div>
      <div className="details">
        <p>{String(date)}</p>
        <span>&#8901;</span>
        <p>{track.primaryGenreName} </p>
        <span>&#8901;</span>
        <p>
          {track.trackTimeMillis
            ? String(millisToMinutesAndSeconds(track.trackTimeMillis))
            : ""}
        </p>
        <span>&#8901;</span>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default TrackView;
