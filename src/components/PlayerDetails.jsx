import React from "react";

const PlayerDetails = (props) => {
  return (
    <div className="c-player--details">
      <div className="detaisl-img">
        <img src={props.song.img_src} alt={props.song.title} />
      </div>
      <h3 className="details-title">{props.song.tile}</h3>
      <h3 className="details-title">{props.song.artist}</h3>
    </div>
  );
};

export default PlayerDetails;
