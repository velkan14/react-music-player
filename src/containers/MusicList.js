import React, { useState } from "react";
import useMusicState from "./useMusicState";
import TrackItem from "../components/TrackItem";
import { createSorter } from "../utils/Sort";
import SortProperty from "../components/SortProperty";
import "../styles/MusicList.css";

const MusicList = ({ history }) => {
  // eslint-disable-next-line
  const { tracks, setTracks, isLoading, setCurrentTrack } = useMusicState();

  const [sortOptions, setSortOptions] = useState({
    property: "default",
    direction: "DESC",
  });

  const onEntryClick = (track) => {
    const index = tracks.indexOf(track);
    setCurrentTrack(index);
    history.push(`/music`);
  };

  const sortBy = (property) => {
    let options = sortOptions;
    if (options.property === property) {
      if (options.direction === "ASC") {
        options.direction = "DESC";
      } else options.direction = "ASC";
    }
    options.property = property;
    tracks.sort(createSorter(options));
    setSortOptions(options);
    setTracks(tracks);
  };

  if (tracks.length === 0) {
    return <h3>Search at some music to start the grove!</h3>;
  }

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className="ma2" style={{ display: "flex" }}>
        <p className="ma1 pa1">Order by:</p>
        <SortProperty
          name="Genre"
          property="primaryGenreName"
          sortBy={sortBy}
          currentSortOptions={sortOptions}
        />
        <SortProperty
          name="Length"
          property="trackTimeMillis"
          sortBy={sortBy}
          currentSortOptions={sortOptions}
        />
        <SortProperty
          name="Price"
          property="trackPrice"
          sortBy={sortBy}
          currentSortOptions={sortOptions}
        />
      </div>
      <div className="grid">
        {tracks.map((track) => (
          <TrackItem track={track} onClick={onEntryClick} />
        ))}
      </div>
    </div>
  );
};

export default MusicList;
