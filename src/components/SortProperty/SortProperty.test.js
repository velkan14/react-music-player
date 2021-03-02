import { shallow } from "enzyme";
import React from "react";
import { SortProperty } from ".";

test("test snapshot", () => {
  expect(
    shallow(
      <SortProperty
        name="Genre"
        property={"genre"}
        sortBy={(genre) => {}}
        currentSortOptions={{ property: "genre", direction: "DESC" }}
      />
    )
  ).toMatchSnapshot();
});
