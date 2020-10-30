import styled from 'styled-components/macro'

export const DashboardLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 20vw 1fr;
  transform: translateX(0);
  transition: transform 0.5s ease;
  height: 100%;
  ${props => `
    @media ${props.theme.breakpoints.xs} {
      grid-template-columns: 50vw 100vw;
      transition: transform 0.33s ease;
      transform: translateX(${props.isMenuOpened ? 0 : '-50vw'});
    }
  `}
`
