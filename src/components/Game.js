import { Link } from 'react-router-dom';
function Game(props) {
  const { id, name, rating, image } = props;
  return (
    <div className="game-card">
      <div className="game-image-holder">
        <img className="game-image" src={image} />
      </div>
      <div>Name: {name}</div>
      <div>Rating: {rating} ⭐</div>
      <div class="buttons-holder">
        <Link
          to={`/games/${id}`}
          className="link"
          style={{ textDecoration: 'none' }}
        >
          <div className="see-more-info-button"> See more info</div>
        </Link>
        <div class="delete-button" onClick={() => props.handleDeleteMovie(id)}>
          <span class="material-icons ">delete_outline</span>
        </div>
      </div>
    </div>
  );
}
export default Game;
