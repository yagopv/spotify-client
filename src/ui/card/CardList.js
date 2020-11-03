import React from 'react'
import Card from '../card/Card'
import { CardContainer } from './styles'
import { extractInfo } from '../../lib/helpers'

export default function CardList({ items, id }) {
  return (
    <CardContainer id={id}>
      {items &&
        items.map(item => <Card key={item.id} item={extractInfo(item)} />)}
    </CardContainer>
  )
}
