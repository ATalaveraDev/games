import { useContext } from 'react';

import GamesList from '../games-list/GamesList';
import { GamesSearchContext } from '../../store/GamesSearchContext';

import { deriveSelectedGamesState } from '../../helpers/search';
import { ProgressContext } from '../../store/ProgressContext';

export default function SelectedGames() {
  const {games} = useContext(GamesSearchContext);
  const {showResume} = useContext(ProgressContext);
  const selectedGames = deriveSelectedGamesState(games);

  return (
    <>
      <h1>Selected Games</h1>
      {selectedGames.length > 0 && <button onClick={showResume}>Add to my library</button>}
      <GamesList data={selectedGames} />
    </>
  );
}