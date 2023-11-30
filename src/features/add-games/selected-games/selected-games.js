import { useContext } from 'react';

import { GamesSearchContext } from '../../../store/GamesSearchContext';

import List from '../../ui/list';
import { ProgressContext } from '../../../store/ProgressContext';
import { deriveSelectedGamesState } from '../../../helpers/search';

export default function SelectedGames() {
  const {games, selectGameHandler} = useContext(GamesSearchContext);
  const {showResume} = useContext(ProgressContext);
  const selectedGames = deriveSelectedGamesState(games);

  return (
    <>
      <h1>Selected Games</h1>
      {selectedGames.length > 0 && <button onClick={showResume}>Add to my library</button>}
      <List data={selectedGames} onSelectItem={selectGameHandler} />
    </>
  );
}