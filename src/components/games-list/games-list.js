import { useEffect, useState } from 'react';

export default function GamesList() {
  const [isFetching, setIsFetching] = useState(false);
  const [games, setGames] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function getData() {
      setIsFetching(true);
      
      try {
        const response = await fetch('http://localhost:3001/videogames');
        const data = await response.json();

        if (!response.ok) {
          throw new Error();
        }

        setGames(data.results);
      } catch (error) {
        setError(error);
      }
      
      setIsFetching(false);      
    }

    getData();
  }, []);

  if (error) {
    console.log(error)
    return <p>Error while fetching data</p>;
  }

  return (
    <>
      {isFetching && <p>Fetching games data...</p>}
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </>
  );
}