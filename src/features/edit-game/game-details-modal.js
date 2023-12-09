import { useContext, useState } from 'react';

import Modal from '../ui/modal';
import { UserGamesContext } from '../../pages/user-games/user-games-context';

export default function GameDetailsModal() {
  const {modalOpen} = useContext(UserGamesContext);
  const [game, setGame] = useState({ status: '', platform: '' });

  function changeHandler(event, field) {
    setGame((prevGame) => ({
      ...prevGame,
      [field]: event.target.value,
    }));
  }
  
  async function submitHandler(event) {
    event.preventDefault();
    console.log(game)
    await fetch(`http://localhost:3001/user/videogames/${game.rawgId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(game)
    });
  }

  return (
    <Modal open={modalOpen}>
      <h1>Game Details</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="status">Status</label>
        <select id="status" defaultValue="" onChange={(event) => changeHandler(event, 'status')}>
          <option hidden value="">Select an option</option>
          <option value="NOT_STARTED">Not started</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="FINISHED">Finished</option>
        </select>
        <label htmlFor="platform">Platform</label>
        <input type="text" id="platform"  onChange={(event) => changeHandler(event, 'platform')} />
        <button>Accept</button>
      </form>
    </Modal>
  );
}