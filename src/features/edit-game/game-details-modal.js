import { useContext } from 'react';

import Modal from '../ui/modal';
import { UserGamesContext } from '../../pages/user-games/user-games-context';

export default function GameDetailsModal() {
  const {modalOpen} = useContext(UserGamesContext);

  return (
    <Modal open={modalOpen}>
      <h1>Game Details</h1>
    </Modal>
  );
}