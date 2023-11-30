import { useContext } from 'react';

import { GamesSearchContext } from '../../../store/GamesSearchContext';

import { deriveSearchedGamesState } from '../../../helpers/search';
import List from '../../ui/list';

export default function SearchedGames() {
  const {debouncedSearch, games, isFetching, error, selectGameHandler} = useContext(GamesSearchContext);
  const searchedGames = deriveSearchedGamesState(games);

  return (
    <>
      <h1>Search Games</h1>
      <input
        type='text'
        onChange={debouncedSearch}
        placeholder='Search game by title....'
      />
      <List
        data={searchedGames}
        isFetching={isFetching}
        error={error}
        onSelectItem={selectGameHandler}
      />
    </>
  );
}