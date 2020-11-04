import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../http'
import { RESOLVED_STATUS, useAsync } from '../../lib/hooks/useAsync'
import ElectricGuitar from '../../ui/animations/electric-guitar/ElectricGuitar'
import CardList from '../../ui/card/CardList'
import WaitUntil from '../../ui/wait-until/WaitUntil'

export default function SearchByType() {
  const { searchTerm, searchType } = useParams()
  const { status, data, run } = useAsync()

  useEffect(() => {
    if (searchTerm) {
      run(
        http.search(searchTerm, searchType, {
          page: 0,
          limit: 50
        })
      )
    }
  }, [run, searchTerm, searchType])

  const items = useMemo(() => {
    if (data) {
      return data[`${searchType}s`].items.sort((a, b) =>
        a.popularity > b.popularity ? -1 : 1
      )
    }
  }, [data, searchType])

  return (
    <WaitUntil
      condition={status === RESOLVED_STATUS}
      fallback={() => <ElectricGuitar />}
    >
      <CardList id="search-by-type" items={items} />
    </WaitUntil>
  )
}
