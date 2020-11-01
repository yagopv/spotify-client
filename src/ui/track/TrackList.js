import React from 'react'
import Track from '../track/Track'

export default function TrackList({ tracks }) {
  return (
    <div id="tracks">
      {tracks && tracks.map(track => <Track key={track.id} track={track} />)}
    </div>
  )
}
