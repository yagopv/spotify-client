import React, { useEffect, useMemo } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import http from '../../http'
import { RESOLVED_STATUS, useAsync } from '../../lib/hooks/useAsync'
import TrackList from '../../ui/track/TrackList'
import { Flex, FlexItem } from '../../ui/base'
import TitleBar from './TitleBar'
import WaitUntil from '../../ui/wait-until/WaitUntil'
import ElectricGuitar from '../../ui/animations/electric-guitar/ElectricGuitar'
import Card from '../../ui/card/Card'
import { extractInfo } from '../../lib/helpers'
import CardList from '../../ui/card/CardList'
import { MainResultContainer } from '../dashboard/styles'

export default function Search() {
  const { searchTerm } = useParams()
  const { status, data, run } = useAsync()

  useEffect(() => {
    if (searchTerm) {
      run(
        http.search(searchTerm, 'album,artist,track', {
          page: 0,
          limit: 8
        })
      )
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
    <WaitUntil
      condition={status === RESOLVED_STATUS}
      fallback={() => <ElectricGuitar />}
    >
      <Flex>
        <FlexItem flex=".5">
          <TitleBar title="Main Result" />
          <MainResultContainer>
            <Card item={extractInfo(searchData?.mainResult)} />
          </MainResultContainer>
        </FlexItem>
        <FlexItem flex="1" ml="lg">
          <TitleBar title="Songs" url={`/search/${searchTerm}/track`} />
          <TrackList tracks={searchData?.tracks.slice(0, 4)} />
        </FlexItem>
      </Flex>
      <TitleBar title="Artists" url={`/search/${searchTerm}/artist`} />
      <CardList id="artists" items={searchData?.artists} />
      <TitleBar title="Albums" url={`/search/${searchTerm}/album`} />
      <CardList id="albums" items={searchData?.albums} />
    </WaitUntil>
  )
}
