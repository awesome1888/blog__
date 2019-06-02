import React from "react";
// import { Link } from "gatsby"

import Layout from '../components/Layout/index.js';
import Intro from '../components/Intro/index.js';
import Central from '../components/Central/index.js';
import Block from '../components/Block/index.js';
import Title from '../components/Title/index.js';
import Skills from '../components/Skills/index.js';
import Footer from '../components/Footer/index.js';
import SEO from '../components/SEO/index.js';

import { So, Explanation } from '../style/general';

const HomePage = () => {
  return (
    <Layout>
      <SEO title="Welcome!" keywords={['']} />
      <Intro />
      <Central>
        <Block>
          <So>So,</So>
          <p className="">
            I'd say, I am 70% front-end, 30% back-end. I am a passionate learner, hard worker, somewhat perfectionist, in deep love with JavaScript. Have masters in math.
            In IT since 2004. I like solving puzzles, producing good quality code, bringing outstanding ideas into the real world, discussing problems and working in a team.
          </p>
        </Block>
        <Block>
          <Title>Skills</Title>
          <Explanation>I am more front-end, than anything else, so I used to think I am good at</Explanation>
          <Skills />
        </Block>
      </Central>
      <Footer />
    </Layout>
  );
};

export default HomePage;
