import List from '../../features/ui/list';
import { useFetch } from '../../hooks/useFetch';

async function getUserGames() {
  const response = await fetch(`http://localhost:3001/user/videogames`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error();
  }

  return data;
}

export default function UserGamesPage() {
  const { data: games } = useFetch(getUserGames, []);

  const actions = [
    {
      label: 'Edit',
      fn: () => console.log('Edit game')
    },
    {
      label: 'Delete',
      fn: () => console.log('Delete game')
    }
  ];

  return (
    <>
      <h1>User Games</h1>
      <List data={games} actions={actions} />
    </>
  );
}