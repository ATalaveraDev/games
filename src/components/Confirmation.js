import { useContext } from 'react';

import Modal from './common/Modal';
import { ProgressContext } from '../store/ProgressContext';
import { GamesSearchContext } from '../store/GamesSearchContext';

export default function Confirmation() {
  const {resume, hideResume} = useContext(ProgressContext);
  const {games} = useContext(GamesSearchContext);

  const selectedGames = games.filter(element => element.status === 'selected');

  return (
    <Modal open={resume}>
      <h1>Confirmation Modal</h1>
      {selectedGames.map(game => <p key={game.id}>{game.name}</p>)}
      <button>Confirm</button>
      <button onClick={hideResume}>Cancel</button>
    </Modal>
  );
}