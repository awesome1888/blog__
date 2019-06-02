import React from 'react'
import {
  Footer,
} from './style.js';

export default ({ children }) => (
  <Footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Footer>
);
