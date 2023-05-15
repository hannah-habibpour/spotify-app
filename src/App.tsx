import NewTrackList from './components/NewTrackList'
import SearchBar from './components/SearchBar'
import OrderSelector from './components/OrderSelector'

function App() {

  return (
    <div className='m-4'>
      <div className="flex justify-between">
        <SearchBar />
        <OrderSelector />
      </div>
      <NewTrackList />
    </div>
  )
}

export default App
