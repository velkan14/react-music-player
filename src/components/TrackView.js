import React from "react";
import "../styles/TrackView.css";

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds === 60
    ? minutes + 1 + ":00"
    : minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

const TrackView = ({ track, onClick, order }) => {
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
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card" onClick={() => onClick(track)}>
      <div className="image">
        <img src={track.artworkUrl60} alt="Cover"></img>
      </div>
      <div className="info">
        <h3>{track.trackName}</h3>
        <h4>{track.artistName}</h4>
        <h5>{track.collectionName}</h5>
      </div>
      <div className="details">
        <p>{String(date)}</p>
        <div className="orders">
          <p>
            {track.primaryGenreName}{" "}
            {order === "genre" ? <span>&#11015;</span> : null}
          </p>
          <span>&#8901;</span>
          <p>
            {track.trackTimeMillis
              ? String(millisToMinutesAndSeconds(track.trackTimeMillis))
              : ""}{" "}
            {order === "length" ? <span>&#11015;</span> : null}
          </p>
          <span>&#8901;</span>
          <p>
            {price} {order === "price" ? <span>&#11015;</span> : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackView;
