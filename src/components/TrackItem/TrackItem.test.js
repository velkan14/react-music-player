import { shallow } from "enzyme";
import React from "react";
import { TrackItem } from "./";

test("test snapshot", () => {
  const mockTrack = {
    artworkUrl60: "/",
    trackName: "name",
    artistName: "artist",
    collectionName: "album",
    releaseDate: "2021-01-01",
    primaryGenreName: "genre",
    trackTimeMillis: 60000,
    trackPrice: "0.0",
    collectionPrice: "0.0",
    currency: "USD",
  };
  expect(shallow(<TrackItem track={mockTrack} />)).toMatchSnapshot();
});
