import { createGlobalStyle } from 'styled-components';

import device from '../utils/device';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin:0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // Making 1rem = 10px

    @media ${device.desktop} {
      font-size : 75%; //Making 1rem = 12px
    }
    @media ${device.tabletL} {
      font-size: 56.25%; //Making 1rem = 9px
    }
    @media ${device.tablet} {
      font-size: 50%; //Making 1rem = 8px
    }
  }

  body {
    box-sizing: border-box;
    font-size: 1.6rem !important;
  }

  ::selection ::-webkit-selection, ::-moz-selection {
    background-color: #333;
  }

`;

export default GlobalStyle;
