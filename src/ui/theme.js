import { createGlobalStyle } from 'styled-components/macro'

export const theme = {
  breakpoints: {
    xs: '(max-width: 576px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1140px)',
  },
  colors: {
    black: '#000',
    lightGrey: '#D6D6DE',
    darkGrey: '#656565',
    blue: '#46bcde',
    red: '#E94F64',
    orange: '#E57254',
    yellow: '#E5C454',
    green: '#52D273',
  },
  font: {
    family: {
      primary: '"Raleway", sans-serif',
      secondary: '"Oswald", sans-serif',
    },
    size: {
      h1: '2rem',
      h2: '1.8rem',
      h3: '1.6rem',
      h4: '1.2rem',
      h5: '1rem',
      h6: '0.8rem',
      p: '0.8rem',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '3rem',
  },
}

export const color = color => theme.colors[color]
export const fontFamily = family => theme.font.family[family]
export const fontSize = size => theme.font.size[size]
export const spacing = size => theme.spacing[size]

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    font-size: 100%;
  }
 
  body, #root {
    font-family: ${fontFamily('primary')};
    height: 100%;
    line-height: 1.3em;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .gutter-horizontal {
    cursor: ew-resize;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${color('darkGrey')};
  }

  ::-webkit-scrollbar {
    width: 3px;
  }

  ::-webkit-scrollbar-track {
    background: ${color('dark')};
  }

  ::-webkit-scrollbar-thumb {
    background: ${color('lightGrey')};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${color('bright')};
  }
`
