import './App.css'
import GenreList from './components/GenreList'
import MenuBar from './components/MenuBar'
import NewTrackList from './components/NewTrackList'
import SearchBar from './components/SearchBar'
import TopGenreMusic from './components/TopGenreMusic'

function App() {

  return (
    <>
      <div>
        <SearchBar />
        <MenuBar />
      </div>
      <NewTrackList />
      <GenreList />
      <TopGenreMusic />
    </>
  )
}

export default App
