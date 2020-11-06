import styled from 'styled-components/macro'
import { theme } from '../../ui/theme'
import { Box, Input, Link } from '../../ui/base'
import { FaAngleLeft, FaBars, FaSearch } from 'react-icons/fa'
import Card from '../../ui/card/Card'
import { CardWrapper } from '../../ui/card/styles'

export const DashboardContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: minmax(200px, 15vw) 1fr;
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

export const DashboardMain = styled(Box)`
  overflow: auto;
  flex: 1 1 auto;
`

export const DashboardNavbar = styled.nav`
  background-color: #000;
  padding: 5px 1.2rem;
`

export const DashboardContent = styled.section`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

export const MenuIcon = styled(FaBars)`
  color: ${theme.colors.yellow};
  height: 32px;
  width: 32px;
  cursor: pointer;
  @media ${theme.breakpoints.sm} {
    display: none;
  }
`

export const BackIcon = styled(FaAngleLeft)`
  color: ${theme.colors.yellow};
  height: 32px;
  width: 32px;
  cursor: pointer;
  @media ${theme.breakpoints.xs} {
    display: none;
  }
`

export const SearchIcon = styled(FaSearch)`
  color: ${theme.colors.yellow};
  height: 32px;
  width: 32px;
  cursor: pointer;
  margin-right: ${theme.spacing.md};
  @media ${theme.breakpoints.sm} {
    display: none;
  }
`

export const SearchInput = styled(Input)`
  width: 300px;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzLjIzMyAyMS44NmwtNS43MTItNS45NGE5LjY1OSA5LjY1OSAwIDAwMi4yNzMtNi4yM2MwLTUuMzQzLTQuMzQ3LTkuNjktOS42OS05LjY5QzQuNzYzIDAgLjQxNSA0LjM0Ny40MTUgOS42OWMwIDUuMzQzIDQuMzQ4IDkuNjkgOS42OSA5LjY5YTkuNTg2IDkuNTg2IDAgMDA1LjU1Mi0xLjc1M2w1Ljc1NSA1Ljk4NWMuMjQxLjI1LjU2NS4zODguOTExLjM4OGExLjI2NSAxLjI2NSAwIDAwLjkxLTIuMTR6TTEwLjEwNSAyLjUyOGMzLjk0OSAwIDcuMTYyIDMuMjEzIDcuMTYyIDcuMTYyIDAgMy45NS0zLjIxMyA3LjE2Mi03LjE2MiA3LjE2Mi0zLjk1IDAtNy4xNjMtMy4yMTMtNy4xNjMtNy4xNjIgMC0zLjk1IDMuMjEzLTcuMTYyIDcuMTYzLTcuMTYyeiIgZmlsbD0iI0Y4QzUxRCIvPjwvc3ZnPg==);
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  padding: 0.5rem 0.5rem 0.5rem 2.5rem;
  transition: all 0.3s ease-in;

  :focus {
    width: 500px;
  }

  ::placeholder {
    color: ${theme.colors.yellow};
    opacity: 0.5;
  }

  @media ${theme.breakpoints.xs} {
    display: none;
  }
`

export const Avatar = styled.img`
  cursor: pointer;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`

export const UserContainer = styled.div`
  position: relative;
  flex: 1;
  text-align: right;
`

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  width: 200px;
  text-align: right;
  border: 1px solid ${theme.colors.yellow};
  padding: ${theme.spacing.md};
  opacity: 0;
  transition: all 0.1s linear;
  background-color: ${theme.colors.blackContainer};
  margin-top: ${theme.spacing.sm};
  visibility: hidden;
  z-index: 1000;

  ${props =>
    props.active &&
    `
    visibility: visible;
    opacity: 1;
  `};

  ${Link} {
    display: block;
    margin-top: ${theme.spacing.md};
  }

  :hover {
    background-color: ${theme.colors.blackContainerHover};
  }
`

export const MainResultContainer = styled.div`
  background-color: ${theme.colors.blackContainer};
  transition: background-color 0.3s ease-out;

  :hover {
    background-color: ${theme.colors.blackContainerHover};
  }

  ${CardWrapper} {
    max-width: 250px;
    text-align: center;
    background-color: transparent;
  }
`
