import { createContext, useState } from 'react';

export const UserGamesContext = createContext({
  openGameDetails: () => {},
  editGame: () => {},
  deleteGame: () => {},
  closeGameDetails: () => {},
  modalOpen: false,
  gameToEdit: {}
});

export default function UserGamesContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [gameToEdit, setGameToEdit] = useState({ platform: '', status: '' });

  async function openGameDetails(itemId) {
    const response = await fetch(`http://localhost:3001/user/videogames/${itemId}`);
    const data = await response.json();
    setGameToEdit(data);
    setModalOpen(true);
  }
  
  function closeGameDetails() {
    setModalOpen(false);
  }

  function editGame() {}

  function deleteGame() {}

  const ctxValue = {
    openGameDetails,
    editGame,
    deleteGame,
    closeGameDetails,
    modalOpen,
    gameToEdit
  };

  return (
    <UserGamesContext.Provider value={ctxValue}>
      {children}
    </UserGamesContext.Provider>
  );
}