import Game from './Game';
function GameList({ gameList, handleDeleteMovie }) {
  const [filterButtonClicked, setFilterButtonClicked] = useState(false);
  function handleButtonClick() {
    setFilterButtonClicked(!filterButtonClicked);
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
