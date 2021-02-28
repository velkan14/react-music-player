import React, { useState } from "react";
import useMusicState from "./useMusicState";
import TrackView from "./TrackView";
import "../styles/MusicList.css";
import { createSorter } from "../utils/Sort";
import SortProperty from "./SortProperty";

const MusicList = ({ history }) => {
  // eslint-disable-next-line
  const { tracks, setTracks, isLoading, setCurrentTrack } = useMusicState();

  const [sortOptions, setSortOptions] = useState({
    property: "default",
    direction: "DESC",
  });

  const onRowClick = (track) => {
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
      <div style={{ display: "flex" }}>
        <p>Order by:</p>
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
      <div className="grid avenir ">
        {tracks.map((track) => (
          <TrackView
            track={track}
            onClick={onRowClick}
            //order={selectedOption.value}
          ></TrackView>
        ))}
      </div>
    </div>
  );
};

export default MusicList;
