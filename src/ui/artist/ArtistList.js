import React from 'react'
import Artist from './Artist'
import { ArtistsContainer } from './styles'

export default function ArtistList({ artists }) {
  return (
    <ArtistsContainer id="artists">
      {artists &&
        artists.map(artist => <Artist key={artist.id} artist={artist} />)}
    </ArtistsContainer>
  )
}
