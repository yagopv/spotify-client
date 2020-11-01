import styled from 'styled-components'
import { theme } from '../../ui/theme'

export const TopResultsLayout = styled.section`
  margin: ${theme.spacing.lg} 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`
