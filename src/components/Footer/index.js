import React from 'react';
import { FooterContainer } from './style.js';
import { Central } from '../../style/general';

const Footer = () => (
    <FooterContainer>
        <Central>&copy; {new Date().getFullYear()}, Sergei Gannochenko</Central>
    </FooterContainer>
);

export default Footer;
