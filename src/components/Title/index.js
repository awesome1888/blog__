import React from 'react'
import {
  Title,
  // Ornament,
  Text
} from './style.js';

export default ({ children }) => (
  <Title>
    {/*<Ornament />*/}
    <Text>
      { children }
    </Text>
    {/*<Ornament mirror />*/}
  </Title>
);
