import React from 'react'
import Lottie from 'react-lottie'
import electricGuitar from './electric-guitar.json'

function ElectricGuitar() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: electricGuitar
  }

  return (
    <Lottie
      options={defaultOptions}
      height={300}
      width={300}
      style={{ marginTop: 30 }}
    />
  )
}

ElectricGuitar.displayName = 'ElectricGuitar'

export default ElectricGuitar
