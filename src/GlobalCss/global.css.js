import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  .list {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

a,
  .link {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
    padding: 0px;
  }

  p {
    margin: 0px;
    padding: 0px;
  }

  img {
    display: block;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

`
