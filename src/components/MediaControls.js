import React from "react";
import "../styles/MediaControls.css";

const MediaControls = ({
  isPlaying,
  onNextClick,
  onPreviousClick,
  onPlayClick,
  disableNext,
  disablePrevious,
}) => {
  return (
    <section className="MediaControls f2">
      <button
        className="control ma2 pa2 br4"
        onClick={onPreviousClick}
        disabled={disablePrevious}
      >
        |◀
      </button>
      <button className="control ma2 pa2 br4" onClick={onPlayClick}>
        {isPlaying ? "⏸" : "▶"}
      </button>
      <button
        className="control ma2 pa2 br4"
        onClick={onNextClick}
        disabled={disableNext}
      >
        ▶|
      </button>
    </section>
  );
};

export default MediaControls;
