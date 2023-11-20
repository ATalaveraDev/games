import './App.css';

import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';
import GamesList from './components/games-list/GamesList';

async function getGames() {
  const response = await fetch(`http://localhost:3001/videogames`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data.results.map(game => { 
    return { ...game, status: 'unselected' };
  });
}

async function searchGames(search, fn) {
  const searchQuery = `?name=${search}`;
  const response = await fetch(`http://localhost:3001/videogames${searchQuery}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data.results.map(game => { 
    return { ...game };
  });
}

function App() {
  const { data: games, setData: setGames, isFetching, error } = useFetch(getGames, []);
  const debouncedSearch = useDebounce(search, []);

  const searchedGames = games.filter(element => element.status === 'unselected');
  const selectedGames = games.filter(element => element.status === 'selected');
 
  function selectGameHandler(gameSelected) {
    setGames((prevGames) => {
      const games = [...prevGames.map(element => ({...element}))];
      games[games.findIndex(element => element.id === gameSelected.id)].status = 'selected';

      return games;
    });
  }

  async function search(event) {
    const searchedGames = await searchGames(event.target.value);

    setGames((prevGames) => {
      const prevGamesCopy = [...prevGames.map(element => ({...element}))];

      return searchedGames.map(element => {
        const index = prevGamesCopy.findIndex((game) => game.id === element.id);
        
        return { ...element, status: index !== -1 ? prevGamesCopy[index].status : 'unselected' };
      });
    })
  }

  return (
    <div className="App">
      <input type="text" onChange={debouncedSearch} placeholder="Search game by title...." />
      <h1>Search Games</h1>
      <GamesList data={searchedGames} isFetching={isFetching} error={error} selectGame={selectGameHandler} />
      <h1>Selected Games</h1>
      <GamesList data={selectedGames} selectGame={selectGameHandler} />
    </div>
  );
}

export default App;
