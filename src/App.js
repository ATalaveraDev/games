import './App.css';

import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';
import GamesList from './components/games-list/GamesList';

import { searchGames, getGames } from './helpers/games';


function deriveGamesState(games) {
  let searchedGames = [];
  let selectedGames = [];

  games.forEach(game => {
    if (game.status === 'unselected') {
      searchedGames.unshift(game);
    }
    if (game.status === 'selected') {
      selectedGames.unshift(game);
    }
  });

  return { searchedGames, selectedGames };
}

function App() {
  const { data: games, setData: setGames, isFetching, error } = useFetch(getGames, []);
  const debouncedSearch = useDebounce(search, []);

  const { searchedGames, selectedGames } = deriveGamesState(games);
 
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
