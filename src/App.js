import './App.css';

import { useState, useCallback } from 'react';

import { useFetch } from './hooks/useFetch';
import GamesList from './components/games-list/GamesList';

async function getGames(search) {
  const searchQuery = search ? `?name=${search}` : '';
  const response = await fetch(`http://localhost:3001/videogames${searchQuery}`);
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

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedFn = useCallback(debounce(search), []);

  async function search(value) {
    const data = await getGames(value);
    console.log('CALLED')
    setSearchedGames(data.results);
  }

  return (
    <div className="App">
      <input type="text" onChange={(event) => optimizedFn(event.target.value)} placeholder="Search game by title...." />
      <h1>Search Games</h1>
      <GamesList data={searchedGames} isFetching={isFetching} error={error} selectGame={selectGameHandler} />
      <h1>Selected Games</h1>
      <GamesList data={selectedGames} selectGame={selectGameHandler} />
    </div>
  );
}

export default App;
