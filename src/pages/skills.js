import React from 'react';
// import { Link } from "gatsby"

import Layout from '../components/Layout/index.js';
import Intro from '../components/Intro/index.js';
import Block from '../components/Block/index.js';
import Footer from '../components/Footer/index.js';
import SEO from '../components/SEO/index.js';
import Skills from '../components/Skills/index.js';

import { Central } from '../style/general';

const SkillsPage = () => {
    return (
        <Layout>
            <SEO title="Skills" keywords={['']} />
            <Intro />
            <Central>
                <Block>
                    <Skills />
                </Block>
            </Central>
            <Footer />
        </Layout>
    );
};

export default SkillsPage;
