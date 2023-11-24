
import GameListItem from '../game-list-item/GameListItem';

export default function GamesList({ data, error, isFetching }) {
  if (error) {
    return <p>Error while fetching data</p>;
  }

  return (
    <>
      {isFetching && <p>Fetching games data...</p>}
      {!isFetching && <ul>{data.map(game => <GameListItem key={game.id} game={game} />)}</ul>}
    </>
  );
}