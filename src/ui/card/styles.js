import styled from 'styled-components/macro'
import { theme } from '../theme'

export const CardContainer = styled.section`
  margin: ${theme.spacing.lg} 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 300px;
  transition: background-color 0.3s ease-in;
  background-color: ${theme.colors.blackContainer};
  padding: ${theme.spacing.md};

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.blackContainerHover};
  }
`

export const CardImage = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  flex: 3;
  border-radius: 2px;
`

export const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: ${theme.colors.darkGrey};
  border-radius: 2px;

  svg {
    height: 100px;
  }
`

export const CardBody = styled.div`
  margin: ${theme.spacing.sm} 0;
  flex: 1;
`
