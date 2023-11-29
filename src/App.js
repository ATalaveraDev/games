import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import SearchPage from './pages/search/search';
import UserGamesPage from './pages/user-games/user-games';

const router = createBrowserRouter([
  { path: '/', element: <SearchPage /> },
  { path: '/user-games', element: <UserGamesPage /> },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
