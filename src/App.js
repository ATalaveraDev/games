import './App.css';

import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';
import GamesList from './components/games-list/GamesList';

import { searchGames, getGames, deriveGamesState } from './helpers/search';


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
    });
  }

  function onClickHandler() {
    console.log(selectedGames);
  }

  return (
    <div className="App">
      <div className="search-container">
        <h1>Search Games</h1>
        <input type="text" onChange={debouncedSearch} placeholder="Search game by title...." />
        <GamesList data={searchedGames} isFetching={isFetching} error={error} selectGame={selectGameHandler} />
      </div>
      <div className="selection-container">
        <h1>Selected Games</h1>
        {selectedGames.length > 0 && <button onClick={onClickHandler}>Add to my library</button>}
        <GamesList data={selectedGames} selectGame={selectGameHandler} />
      </div>
    </div>
  );
}

export default App;
