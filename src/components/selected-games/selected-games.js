import { useContext } from 'react';

import GamesList from '../games-list/GamesList';
import { GamesSearchContext } from '../../store/GamesSearchContext';

import { deriveSelectedGamesState } from '../../helpers/search';

export default function SelectedGames() {
  const {games, onClickHandler} = useContext(GamesSearchContext);
  const selectedGames = deriveSelectedGamesState(games);

  return (
    <>
      <h1>Selected Games</h1>
      {selectedGames.length > 0 && <button onClick={onClickHandler}>Add to my library</button>}
      <GamesList data={selectedGames} />
    </>
  );
}