import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0px;
    border: 0px;
    margin: 0px;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :focus,
  :active {
    outline: none;
  }

  a:focus,
  a:active {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: inherit;
    font-size: inherit;
    margin: 0px;
  }

  html,
  body {
    height: 100%;
    font-family: 'e-Ukraine Head';
    line-height: normal;
    color: ${({ theme }) => theme.palette.colors.secondary};
  }
  
  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    color: inherit;
    background-color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }
  
  img {
    vertical-align: top;
    display: block;
    max-width: 100%;
    height: auto;
  }

  .pswp img {
  object-fit: contain;
}
`;
