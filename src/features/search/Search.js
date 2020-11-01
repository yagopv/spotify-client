import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../http'
import { useAsync } from '../../lib/hooks/useAsync'
import AlbumList from '../../ui/album/AlbumList'
import ArtistList from '../../ui/artist/ArtistList'
import TrackList from '../../ui/track/TrackList'
import { Flex, FlexItem } from '../../ui/base'
import TitleBar from './TitleBar'
import MainResult from './MainResult'

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
      const formattedData = {
        artists: data.artists.items.sort((a, b) =>
          a.popularity > b.popularity ? -1 : 1
        ),
        albums: data.albums.items.sort((a, b) =>
          a.popularity > b.popularity ? -1 : 1
        ),
        tracks: data.tracks.items.sort((a, b) =>
          a.popularity > b.popularity ? -1 : 1
        )
      }

      return {
        ...formattedData,
        mainResult: [
          formattedData.artists[0],
          formattedData.albums[0],
          formattedData.tracks[0]
        ].reduce((prev, current) => {
          return prev.popularity > current.popularity ? prev : current
        })
      }
    }
    return null
  }, [data])

  return (
    <>
      <Flex>
        <FlexItem flex="1">
          <TitleBar title="Main Result" />
          <MainResult item={searchData?.mainResult} />
        </FlexItem>
        <FlexItem flex="1">
          <TitleBar title="Songs" />
          <TrackList tracks={searchData?.tracks} />
        </FlexItem>
      </Flex>
      <TitleBar title="Artists" onShowAll={() => console.log('click')} />
      <ArtistList artists={searchData?.artists} />
      <TitleBar title="Albums" onShowAll={() => console.log('click')} />
      <AlbumList albums={searchData?.albums} />
    </>
  )
}
