import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../http'
import { useAsync } from '../../lib/hooks/useAsync'
import AlbumList from '../../ui/album/AlbumList'
import ArtistList from '../../ui/artist/ArtistList'
import TrackList from '../../ui/track/TrackList'
import { Flex, FlexItem } from '../../ui/base'
import Track from '../../ui/track/Track'
import TitleBar from './TitleBar'

export default function Search() {
  const { searchTerm } = useParams()
  const { data, run } = useAsync()

  useEffect(() => {
    if (searchTerm) {
      run(http.searchAll(searchTerm, 1, 8))
    }
  }, [run, searchTerm])

  const searchData = useMemo(() => {
    if (data) {
      data.artists.items.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
      data.albums.items.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))
      data.tracks.items.sort((a, b) => (a.popularity > b.popularity ? -1 : 1))

      return data
    }
    return null
  }, [data])

  return (
    <>
      <Flex>
        <FlexItem flex="1">
          <TitleBar title="Main Result" />
          <p>Main Result</p>
        </FlexItem>
        <FlexItem flex="1">
          <TrackList tracks={searchData?.tracks?.items} />
        </FlexItem>
      </Flex>
      <TitleBar title="Artists" onShowAll={() => console.log('click')} />
      <ArtistList artists={searchData?.artists?.items} />
      <TitleBar title="Albums" onShowAll={() => console.log('click')} />
      <AlbumList albums={searchData?.albums?.items} />
    </>
  )
}
