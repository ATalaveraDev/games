import UserGamesContextProvider from './user-games-context';
import EditableGamesList from '../../features/edit-game/editable-games-list';

export default function UserGamesPage() {
  return (
    <UserGamesContextProvider>
      <h1>User Games</h1>
      <EditableGamesList />
    </UserGamesContextProvider>
  );
}

export async function loader() {
  const response = await fetch(`http://localhost:3001/user/videogames`);
  const data = await response.json();

  if (!response.ok) {
    // throw new Error();
  }

  return data;
}