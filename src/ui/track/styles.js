import styled from 'styled-components/macro'
import { Flex } from '../base'
import { theme } from '../theme'

export const TrackWrapper = styled(Flex)`
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.blackContainerHover};
  }
`
export const TrackImage = styled.img`
  height: 40px;
`
