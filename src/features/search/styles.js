import styled from 'styled-components'
import { Link } from '../../ui/base'
import { theme } from '../../ui/theme'

export const TitleBarLink = styled(Link)`
  opacity: 0.8;
  font-size: ${theme.fontSize.p};
  transition: opacity 0.1s ease-in;

  :hover {
    opacity: 1;
  }
`
