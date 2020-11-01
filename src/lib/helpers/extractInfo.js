export function extractInfo(item) {
  if (!item) {
    return
  }

  if (item.type === 'track') {
    return {
      id: item.id,
      title: item.name,
      subtitle: item.artists[0].name,
      url: item.album.images[1].url,
      duration: msToTime(item.duration_ms)
    }
  }

  if (item.type === 'album') {
    return {
      id: item.id,
      title: item.name,
      subtitle: item.artists[0].name,
      url: item.images[1].url
    }
  }

  if (item.type === 'artist') {
    return {
      id: item.id,
      title: item.name,
      subtitle: 'Artist',
      url: item.images[1].url
    }
  }
}

function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60)
  let minutes = Math.floor((duration / (1000 * 60)) % 60)
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = hours < 10 ? '0' + hours : hours
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  return `${hours !== '00' ? hours + ':' : ''}${
    minutes !== '00' ? minutes + ':' : ''
  }${seconds !== '00' ? seconds : ''}`
}
