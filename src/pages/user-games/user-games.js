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