import React from "react";

const directionMapping = {
  ASC: "↓",
  DESC: "↑",
};

const SortProperty = ({ name, property, sortBy, currentSortOptions }) => {
  return (
    <p className="clickable ma1 pa1 link glow" onClick={() => sortBy(property)}>
      {name}
      {currentSortOptions.property === property ? (
        <span>{directionMapping[currentSortOptions.direction]}</span>
      ) : null}
    </p>
  );
};

export { SortProperty };
