import React from "react";
import { formatMillis, formatDate, formatPrice } from "../../utils/Format";
import "./TrackItem.css";

const TrackItem = ({ track, onClick }) => {
  return (
    <div className="card clickable" onClick={() => onClick(track)}>
      <div className="ma2">
        <img src={track.artworkUrl60} alt="Cover"></img>
      </div>
      <div className="info">
        <p className="f5 b">{track.trackName}</p>
        <p className="f5 white-60">{track.artistName}</p>
        <p className="f5 white-60">{track.collectionName}</p>
      </div>
      <div className="details">
        <p>{formatDate(track.releaseDate)}</p>
        <span>&#8901;</span>
        <p>{track.primaryGenreName} </p>
        <span>&#8901;</span>
        <p>
          {track.trackTimeMillis
            ? String(formatMillis(track.trackTimeMillis))
            : ""}
        </p>
        <span>&#8901;</span>
        <p>
          {formatPrice(
            track.trackPrice ? track.trackPrice : track.collectionPrice,
            track.currency
          )}
        </p>
      </div>
    </div>
  );
};

export { TrackItem };
