import { useEffect, useState } from 'react';
import axios from 'axios';
import Game from './Game';
function GameList() {
  const [gameList, setGameList] = useState([]);
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  useEffect(() => {
    axios
      .get('https://wild-games.jsrover.wilders.dev/games')
      .then((response) => response.data)
      .then((data) => {
        const list = data.map((game) => ({
          id: game.id,
          name: game.name,
          rating: game.rating,
          image: game.background_image,
        }));
        setGameList(list);
      });
  }, []);
  function handleButtonClick() {
    setFilterButtonClicked(!filterButtonClicked);
  }
  function handleDeleteMovie(id) {
    setGameList(gameList.filter((game) => game.id !== id));
  }
  return (
    <div className="game-list">
      <div className="filter-button-holder">
        <button className="filter-button" onClick={() => handleButtonClick()}>
          {filterButtonClicked ? 'Show all movies' : 'Filter movies by rating'}
        </button>
      </div>

      <div className="game-cards-holder">
        {gameList
          .filter((game) => !filterButtonClicked || game.rating > 4.5)
          .map((game, index) => (
            <Game
              key={index}
              {...game}
              handleDeleteMovie={handleDeleteMovie}
            ></Game>
          ))}
      </div>
    </div>
  );
}
export default GameList;
