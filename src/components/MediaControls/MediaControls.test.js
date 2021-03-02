import { shallow } from "enzyme";
import React from "react";
import { MediaControls } from "./";

test("test snapshot", () => {
  expect(shallow(<MediaControls />)).toMatchSnapshot();
});
