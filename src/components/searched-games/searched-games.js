import { useContext } from 'react';
import GamesList from '../games-list/GamesList';
import { GamesSearchContext } from '../../store/GamesSearchContext';

export default function SearchedGames() {
  const {debouncedSearch, searchedGames, isFetching, error} = useContext(GamesSearchContext);
  return (
    <>
      <h1>Search Games</h1>
      <input type="text" onChange={debouncedSearch} placeholder="Search game by title...." />
      <GamesList data={searchedGames} isFetching={isFetching} error={error} />
    </>
  );
}