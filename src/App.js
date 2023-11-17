import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch('http://localhost:3001/videogames');
      const data = await res.json();
      setGames(data.results);
      console.log(games)
    }

    getData();
  }, [])

  return (
    <div className="App">
      <h1>My Games</h1>
      <ul>
        {games.map(game => <li key={game.id}>{game.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
