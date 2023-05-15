import { Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { SearchResult } from '../App'

interface Props {
  data: SearchResult
  filterTrack: string
}
function TrackGrid({ data, filterTrack }: Props) {
  const filteredTracks = data.tracks.items.filter((track) => {
    if (filterTrack === 'NONE') {
      return track.data.contentRating.label === 'NONE';
    } else if (filterTrack === 'EXPLICIT') {
      return track.data.contentRating.label === 'EXPLICIT';
    }
    return true; 
  });
  
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
      {filteredTracks.map((track) => (
        <Card key={track.data.id} backgroundColor='gray.200' rounded={10}>
          <CardBody rounded={10}  boxShadow='2xl'>
            <Image src={track.data.albumOfTrack.coverArt.sources[0].url}></Image>
            <Heading fontSize='2xl' paddingTop={2}>{track.data.name}</Heading>
            <div className='mt-2'>
              <Text><span className='font-bold'> Artist: </span>{track.data.artists.items[0].profile.name}</Text>
              <Text><span className='font-bold'> Album: </span>{track.data.albumOfTrack.name}</Text>
              <Text><span className='font-bold'> Label: </span>{track.data.contentRating.label}</Text>
            </div>
          </CardBody>
        </Card>
      )
      )} 
    </SimpleGrid>
  )
}

export default TrackGrid