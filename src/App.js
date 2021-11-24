import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import './styles/styles.css';
function App() {
  const [gameList, setGameList] = useState([]);
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
  function handleDeleteMovie(id) {
    setGameList(gameList.filter((game) => game.id !== id));
  }
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header name="React Game" />
              <GameList
                gameList={gameList}
                handleDeleteMovie={handleDeleteMovie}
              />
            </div>
          }
        />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
