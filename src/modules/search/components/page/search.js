import Confirmation from '../confirmation-modal/confirmation';
import ProgressContextProvider from '../../ProgressContext';
import GamesSearchContextProvider from '../../GamesSearchContext';
import SearchedGames from '../searched-games/searched-games';
import SelectedGames from '../selected-games/selected-games';

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
