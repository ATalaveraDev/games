import './App.css';

import GamesSearchContextProvider from './store/GamesSearchContext';
import SelectedGames from './components/selected-games/selected-games';
import SearchedGames from './components/searched-games/searched-games';
import Confirmation from './components/Confirmation';
import ProgressContextProvider from './store/ProgressContext';

function App() {
  return (
    <div className='App'>
      <GamesSearchContextProvider>
        <ProgressContextProvider>
          <div className='search-container'>
            <SearchedGames />
          </div>
          <div className='selection-container'>
            <SelectedGames />
          </div>
          <Confirmation />
        </ProgressContextProvider>
      </GamesSearchContextProvider>
    </div>
  );
}

export default App;
