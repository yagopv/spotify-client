import React from 'react'
import { extractInfo } from '../../lib/helpers'
import Card from '../card/Card'
import { ArtistsContainer } from './styles'

export default function ArtistList({ artists }) {
  return (
    <ArtistsContainer id="artists">
      {artists &&
        artists.map(artist => (
          <Card key={artist.id} item={extractInfo(artist)} />
        ))}
    </ArtistsContainer>
  )
}
