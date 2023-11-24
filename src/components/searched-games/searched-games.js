import { useContext } from 'react';

import GamesList from '../games-list/GamesList';
import { GamesSearchContext } from '../../store/GamesSearchContext';

import { deriveSearchedGamesState } from '../../helpers/search';

export default function SearchedGames() {
  const {debouncedSearch, games, isFetching, error} = useContext(GamesSearchContext);
  const searchedGames = deriveSearchedGamesState(games);

  return (
    <>
      <h1>Search Games</h1>
      <input type="text" onChange={debouncedSearch} placeholder="Search game by title...." />
      <GamesList data={searchedGames} isFetching={isFetching} error={error} />
    </>
  );
}