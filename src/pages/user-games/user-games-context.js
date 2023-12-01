import { createContext, useState } from 'react';

export const UserGamesContext = createContext({
  openGameDetails: () => {},
  editGame: () => {},
  deleteGame: () => {},
  closeGameDetails: () => {},
  modalOpen: false
});

export default function UserGamesContextProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  function openGameDetails() {
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
    modalOpen
  };

  return (
    <UserGamesContext.Provider value={ctxValue}>
      {children}
    </UserGamesContext.Provider>
  );
}