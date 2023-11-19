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

function toggleGameFromList(list, game) {
  let newSelectedData = [...list];
  const index = newSelectedData.findIndex(element => element.id === game.id);

  index === -1 ? newSelectedData.unshift({...game}) : newSelectedData.splice(index, 1);

  return newSelectedData;
}

function App() {
  const { data: searchedGames, setData: setSearchedGames, isFetching, error } = useFetch(getGames, []);
  const [selectedGames, setSelectedGames] = useState([]);

  function selectGameHandler(gameSelected) {
    setSelectedGames((selectedData) => toggleGameFromList(selectedData, gameSelected));
    setSearchedGames((searchedData) => toggleGameFromList(searchedData, gameSelected));
  }

  return (
    <div className="App">
      <h1>Search Games</h1>
      <GamesList data={searchedGames} isFetching={isFetching} error={error} selectGame={selectGameHandler} />
      <h1>Selected Games</h1>
      <GamesList data={selectedGames} selectGame={selectGameHandler} />
    </div>
  );
}

export default App;
