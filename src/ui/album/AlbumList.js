import React from 'react'
import Album from '../album/Album'
import { AlbumContainer } from './styles'

export default function AlbumList({ albums }) {
  return (
    <AlbumContainer id="albums">
      {albums && albums.map(album => <Album key={album.id} album={album} />)}
    </AlbumContainer>
  )
}
