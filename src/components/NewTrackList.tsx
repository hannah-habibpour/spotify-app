import TrackGrid from './TrackGrid'
import { SearchResult } from '../App'

interface Props {
  data: SearchResult
  searchFilter: string
}

function NewTrackList({ data, searchFilter }: Props) {
  return (
    <div>
          <h1 className='font-bold text-3xl pl-2 p'>Top Tracks</h1>
          <TrackGrid filterTrack={searchFilter} data={data} />
    </div>
  )
}

export default NewTrackList