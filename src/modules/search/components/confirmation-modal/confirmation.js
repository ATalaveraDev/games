import { useContext } from 'react';

import Modal from '../../../../components/ui/modal';
import { ProgressContext } from '../../ProgressContext';
import { GamesSearchContext } from '../../GamesSearchContext';

export default function Confirmation() {
  const {resume, hideResume} = useContext(ProgressContext);
  const {games, saveGames} = useContext(GamesSearchContext);

  const selectedGames = games.filter(element => element.status === 'selected');

  async function confirmHandler() {
    await saveGames(selectedGames);
    hideResume();
  }

  return (
    <Modal open={resume}>
      <h1>Confirmation Modal</h1>
      {selectedGames.map(game => <p key={game.id}>{game.name}</p>)}
      <button onClick={confirmHandler}>Confirm</button>
      <button onClick={hideResume}>Cancel</button>
    </Modal>
  );
}