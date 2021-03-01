import React from "react";

const SortProperty = ({ name, property, sortBy, currentSortOptions }) => {
  return (
    <p className="clickable ma1 pa1 link glow" onClick={() => sortBy(property)}>
      {name}
      {currentSortOptions.property === property ? (
        currentSortOptions.direction === "ASC" ? (
          <span>↓</span>
        ) : (
          <span>↑</span>
        )
      ) : null}
    </p>
  );
};

export default SortProperty;
