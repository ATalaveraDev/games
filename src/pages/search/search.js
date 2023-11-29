import Confirmation from '../../components/Confirmation';
import ProgressContextProvider from '../../store/ProgressContext';
import GamesSearchContextProvider from '../../store/GamesSearchContext';
import SearchedGames from '../../components/searched-games/searched-games';
import SelectedGames from '../../components/selected-games/selected-games';

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
