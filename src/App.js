import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import SearchPage from './pages/search/search';
import UserGamesPage, { loader as UserGamesLoader } from './pages/user-games/user-games';

const router = createBrowserRouter([
  { index: true, element: <SearchPage /> },
  { path: '/user-games', element: <UserGamesPage />, loader: UserGamesLoader },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
