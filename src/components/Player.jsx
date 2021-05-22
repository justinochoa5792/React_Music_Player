import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
const Player = (props) => {
  console.log(props);
  return (
    <div className="c-player">
      <audio></audio>
      <h4>Playing Now</h4>
      <PlayerDetails song={props.song} />
      <PlayerControls />
      <p>
        <strong>Next Up:</strong>
        {props.nextSong.title} by {props.nextSong.artist}
      </p>
    </div>
  );
};

export default Player;
