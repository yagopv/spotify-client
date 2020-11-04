import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../http'
import { RESOLVED_STATUS, useAsync } from '../../lib/hooks/useAsync'
import ElectricGuitar from '../../ui/animations/electric-guitar/ElectricGuitar'
import CardList from '../../ui/card/CardList'
import WaitUntil from '../../ui/wait-until/WaitUntil'

export default function Artists() {
  const { searchTerm } = useParams()
  const { status, data, run } = useAsync()

  useEffect(() => {
    if (searchTerm) {
      run(http.searchArtists(searchTerm, 1, 50))
    }
  }, [run, searchTerm])

  const artists = useMemo(() => {
    if (data) {
      return data.artists.items.sort((a, b) =>
        a.popularity > b.popularity ? -1 : 1
      )
    }
  }, [data])

  return (
    <WaitUntil
      condition={status === RESOLVED_STATUS}
      fallback={() => <ElectricGuitar />}
    >
      <CardList id="artists" items={artists} />
    </WaitUntil>
  )
}
