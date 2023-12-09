import { useContext } from 'react';

import List from '../ui/list';
import { useFetch } from '../../hooks/useFetch';
import GameDetailsModal from './game-details-modal';
import { UserGamesContext } from '../../pages/user-games/user-games-context';

async function getUserGames() {
  const response = await fetch(`http://localhost:3001/user/videogames`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data;
}

export default function EditableGamesList() {
  const { data: games } = useFetch(getUserGames, []);
  const {openGameDetails} = useContext(UserGamesContext);

  const actions = [
    {
      label: 'Edit',
      fn: (itemId) => openGameDetails(itemId)
    },
    {
      label: 'Delete',
      fn: () => console.log('Delete game')
    }
  ];

  return (
    <>
      <List data={games} actions={actions} />
      <GameDetailsModal />
    </>
  );
}