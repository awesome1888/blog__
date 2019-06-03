import React from 'react';
import { Container, Inner } from './style.js';

export default ({ children }) => (
    <Container>
        <Inner>{children}</Inner>
    </Container>
);
