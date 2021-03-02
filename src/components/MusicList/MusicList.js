import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SortProperty, TrackItem } from "..";
import { createSorter } from "../../utils/Sort";
import { useMusicState } from "../../hooks";
import "./MusicList.css";

const MusicList = () => {
  const { tracks, setTracks, isLoading, setCurrentTrack } = useMusicState();

  const history = useHistory();

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
    return <h3>Search some music to start grooving!</h3>;
  }

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <div>
      <div className="sort ma2">
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

export { MusicList };
