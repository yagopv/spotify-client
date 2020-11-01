import { theme } from '../theme'

export const color = props => ({
  background: props.bg && theme.colors[props.bg],
  color: props.color && theme.colors[props.color]
})
