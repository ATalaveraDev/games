import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';
import { searchGames, getGames } from '../helpers/search';

export const GamesSearchContext = createContext({
  games: [],
  selectGameHandler: () => {},
  debouncedSearch: [],
  saveGames: () => {},
  isFetching: false,
  error: ''
});

export default function GamesSearchContextProvider({children}) {
  const { data: games, setData: setGames, isFetching, error } = useFetch(getGames, []);
  const debouncedSearch = useDebounce(search, []);
  const navigate = useNavigate();
 
  function selectGameHandler(gameSelected) {
    setGames((prevGames) => {
      const games = [...prevGames.map(element => ({...element}))];
      const index = games.findIndex(element => element.id === gameSelected.id);
      games[index].status = games[index].status === 'selected' ? 'unselected' : 'selected';

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

  async function saveGames(games) {
    await fetch('http://localhost:3001/videogames', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(games)
    });
    setGames(prevGames => {
      return prevGames.map((game) => {
        return {
          ...game,
          status: 'unselected',
        };
      });
    });
    navigate('/user-games');
  }

  const ctxValue = {
    games,
    selectGameHandler,
    debouncedSearch,
    saveGames,
    isFetching,
    error
  };

  return <GamesSearchContext.Provider value={ctxValue}>
    {children}
  </GamesSearchContext.Provider>
}