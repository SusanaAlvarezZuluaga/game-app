import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function GameDetails() {
  const params = useParams();
  const gameId = params.id;
  const [game, setGame] = useState(null);
  useEffect(() => {
    axios
      .get('https://wild-games.jsrover.wilders.dev/games')
      .then((response) => response.data)
      .then((data) => data.find((game) => game.id == gameId))
      .then((selectedGame) => {
        const gameInfo = {
          videoClip: selectedGame.clip.clip,
          name: selectedGame.name,
          rating: selectedGame.rating,
          released: selectedGame.released,
          genres: selectedGame.genres,
        };
        setGame(gameInfo);
      });
  }, []);

  return (
    game && (
      <div className="game-details-card">
        <div className="game-details-title">{game.name}</div>
        <div className="video-holder">
          <video
            className="game-video"
            loop
            autoPlay
            src={game.videoClip}
          ></video>
        </div>
        <div className="game-details-info">
          <div>Rating: {game.rating} ⭐</div>
          <div>Release Date: {game.released}</div>
          <div>Genres: </div>
          <ul>
            {game.genres.map((genre, index) => (
              <li key={index}> {genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  );
}
export default GameDetails;
