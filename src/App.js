import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import './styles/styles.css';
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header name="React Game" />
              <GameList />
            </div>
          }
        />
        <Route path="/games/:id" element={<GameDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
