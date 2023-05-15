import NewTrackList from './components/NewTrackList'
import SearchBar from './components/SearchBar'
import OrderSelector from './components/OrderSelector'
import { useState } from 'react';
import { searchApi } from './api-client';

export interface SearchResult {
  tracks: {
    items: {
      data: {
        id: string;
        name: string;
        contentRating: {
          label: string;
        };
        artists: {
          items: {
            profile: {
              name: string;
            };
          }[];
        };
        albumOfTrack: {
          name: string;
          coverArt: {
            sources: {
              url: string;
            }[];
          };
        };
      };
    }[];
  };
}

function App() {
  const [filter, setFilter] = useState<string>('')
  const [searchResult, setSearchResult] = useState<SearchResult>(searchApi('love'))

  return (
    <div className='m-4'>
      <div className="flex justify-between">
        <SearchBar onSearch={(searchText)=> setSearchResult(searchApi(searchText))} />
        <OrderSelector onFilter={(filter) => setFilter(filter)} />
      </div>
      <NewTrackList searchFilter={filter} data={searchResult} />
    </div>
  )
}

export default App