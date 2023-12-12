import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import SearchPage from './modules/search/components/page/search';
import UserGamesPage, { loader as UserGamesLoader } from './modules/user-games/components/page/user-games';

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
