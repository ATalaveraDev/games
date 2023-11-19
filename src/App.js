import './App.css';

import { useState } from 'react';

import { useFetch } from './hooks/useFetch';
import GamesList from './components/games-list/GamesList';

async function getGames() {
  const response = await fetch('http://localhost:3001/videogames');
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data;
}

function App() {
  const { data: searchedGames, isFetching, error } = useFetch(getGames, []);
  const [selectedGames, setSelectedGames] = useState([]);

  function selectGameHandler(event) {
    setSelectedGames((prevSelectedData) => {
      let newSelectedData = [...prevSelectedData];
      const index = newSelectedData.indexOf(event.target.id);

      index === -1 ? newSelectedData.unshift(event.target.id) : newSelectedData.splice(index, 1);

      return newSelectedData;
    });
  }

  return (
    <div className="App">
      <h1>Search Games</h1>
      <GamesList data={searchedGames} isFetching={isFetching} error={error} selectGame={selectGameHandler} />
      <h1>Selected Games</h1>
    </div>
  );
}

export default App;
