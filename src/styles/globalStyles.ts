import { createGlobalStyle } from 'styled-components';
import { cores } from './colors/colors';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background: ${cores.background};
    color: ${cores.secondary};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1 {
    color: ${cores.primary};
  }

  button {
    background-color: ${cores.primary};
    color: ${cores.secondary};
    font-weight: 800;
    font-size: 14px;

    &:hover {
      background-color: ${cores.primary}80;
    }
  }

  input {
    border-radius: 8px;
    padding: 12px 16px !important;
  }
`;

export default GlobalStyle;
