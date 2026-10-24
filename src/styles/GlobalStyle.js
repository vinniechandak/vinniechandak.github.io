import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* JetBrains Mono is loaded via a <link> tag in public/index.html,
     which the production CSSOM path handles far more reliably. */

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.mono};
    background: ${props => props.theme.colours.base};
    color: ${props => props.theme.colours.text};
    font-size: 15px;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    color: ${props => props.theme.colours.path};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover,
  a:focus {
    color: ${props => props.theme.colours.prompt};
  }

  :focus-visible {
    outline: 2px solid ${props => props.theme.colours.path};
    outline-offset: 2px;
  }

  p {
    margin: 0 0 0.9rem;
  }

  ::selection {
    background: ${props => props.theme.colours.path};
    color: ${props => props.theme.colours.base};
  }

  /* Thin terminal-style scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colours.chrome};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colours.border};
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colours.textFaint};
  }
`

export default GlobalStyle
