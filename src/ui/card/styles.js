import styled from 'styled-components/macro'
import { theme } from '../theme'

export const CardWrapper = styled.section`
  margin: ${theme.spacing.lg} 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`
