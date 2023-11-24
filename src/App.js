import './App.css';

import GamesSearchContextProvider from './store/GamesSearchContext';
import SelectedGames from './components/selected-games/selected-games';
import SearchedGames from './components/searched-games/searched-games';

function App() {
  return (
    <div className="App">
      <GamesSearchContextProvider>
        <div className="search-container">
          <SearchedGames />
        </div>
        <div className="selection-container">
          <SelectedGames />
        </div>
      </GamesSearchContextProvider>
    </div>
  );
}

export default App;
