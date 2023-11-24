import { useContext } from 'react';
import { GamesSearchContext } from '../../store/GamesSearchContext';
import GamesList from '../games-list/GamesList';

export default function SelectedGames() {
  const {selectedGames, onClickHandler} = useContext(GamesSearchContext);

  return (
    <>
      <h1>Selected Games</h1>
      {selectedGames.length > 0 && <button onClick={onClickHandler}>Add to my library</button>}
      <GamesList data={selectedGames} />
    </>
  );
}