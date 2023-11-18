import { useFetch } from '../../hooks/useFetch';

async function getGames() {
  const response = await fetch('http://localhost:3001/videogames');
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data;
}

export default function GamesList() {
  const { data, isFetching, error } = useFetch(getGames, []);

  if (error) {
    return <p>Error while fetching data</p>;
  }

  return (
    <>
      {isFetching && <p>Fetching games data...</p>}
      <ul>
        {data.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}