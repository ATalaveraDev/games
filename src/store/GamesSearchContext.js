import { createContext } from 'react';

import { useFetch } from '../hooks/useFetch';
import { useDebounce } from '../hooks/useDebounce';
import { searchGames, getGames } from '../helpers/search';

export const GamesSearchContext = createContext({
  games: [],
  selectGameHandler: () => {},
  debouncedSearch: [],
  isFetching: false,
  error: ''
});

export default function GamesSearchContextProvider({children}) {
  const { data: games, setData: setGames, isFetching, error } = useFetch(getGames, []);
  const debouncedSearch = useDebounce(search, []);
 
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

  const ctxValue = {
    games,
    selectGameHandler,
    debouncedSearch,
    isFetching,
    error
  };

  return <GamesSearchContext.Provider value={ctxValue}>
    {children}
  </GamesSearchContext.Provider>
}