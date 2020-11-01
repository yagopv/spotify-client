import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../../http'
import { useAsync } from '../../lib/hooks/useAsync'

export default function Search() {
  const params = useParams()
  const { data, run } = useAsync()

  useEffect(() => {
    if (params.searchTerm) {
      run(http.searchAll(params.searchTerm))
    }
  }, [params, run])

  return <div>{JSON.stringify(data)}</div>
}
