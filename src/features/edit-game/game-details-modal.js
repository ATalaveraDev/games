import { useContext, useState } from 'react';

import Modal from '../ui/modal';
import { UserGamesContext } from '../../pages/user-games/user-games-context';

export default function GameDetailsModal() {
  const {modalOpen} = useContext(UserGamesContext);
  const [game, setGame] = useState({});

  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <Modal open={modalOpen}>
      <h1>Game Details</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="status">Status</label>
        <select id="status">
          <option value="">Select an option</option>
          <option value="NOT_STARTED">Not started</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="FINISHED">Finished</option>
        </select>
        <label htmlFor="platform">Platform</label>
        <input type="text" />
        <button>Accept</button>
      </form>
    </Modal>
  );
}