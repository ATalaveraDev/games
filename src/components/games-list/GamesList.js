export default function GamesList({ data, error, isFetching, selectGame }) {
  if (error) {
    return <p>Error while fetching data</p>;
  }

  return (
    <>
      {isFetching && <p>Fetching games data...</p>}
      {!isFetching && <ul>{data.map(game => <li key={game.id} id={game.id} onClick={selectGame}>{game.name}</li>)}</ul>}
    </>
  );
}