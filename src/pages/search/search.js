import Confirmation from '../../features/add-games/confirmation';
import ProgressContextProvider from '../../store/ProgressContext';
import GamesSearchContextProvider from '../../store/GamesSearchContext';
import SearchedGames from '../../features/search-games/searched-games/searched-games';
import SelectedGames from '../../features/add-games/selected-games/selected-games';

import './search.css';

export default function SearchPage() {
  return (
    <div className="container">
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
