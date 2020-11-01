import React from 'react'
import { extractInfo } from '../../lib/helpers'
import { Text } from '../../ui/base'

export default function MainResult({ item }) {
  const data = extractInfo(item)

  return (
    <div>
      <img src={data?.url} alt={data && data.title} />
      <Text>{data?.title}</Text>
      <Text as="h5">{data?.subtitle}</Text>
    </div>
  )
}
