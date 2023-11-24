import { useContext } from 'react';

import { GamesSearchContext } from '../../store/GamesSearchContext';

export default function GameListItem({ game }) {
  const { selectGameHandler } = useContext(GamesSearchContext);
  const { id, name } = game;

  return (
    <li id={id} onClick={() => selectGameHandler(game)}>{name}</li>
  );
}