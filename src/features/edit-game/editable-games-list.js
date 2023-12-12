import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';

import List from '../ui/list';
import GameDetailsModal from './game-details-modal';
import { UserGamesContext } from '../../pages/user-games/user-games-context';

export default function EditableGamesList() {
  const games = useLoaderData();
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