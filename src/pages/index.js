import React from "react"
import { Link } from "gatsby"

import Layout from '../components/Layout/index.js';
import Intro from '../components/Intro/index.js';
// import Central from '../components/central/index.js';
// import Block from '../components/block/index.js';
// import Title from '../components/title/index.js';
// import Skills from '../components/skills/index.js';
// import Footer from '../components/footer/index.js';

// import Layout from "../components/layout"
// import Image from "../components/image"
// import { Container } from "../components/layoutComponents"
// import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      {/*<Central>*/}
        {/*<Block>*/}
          {/*<So>So,</So>*/}
          {/*<p className="">*/}
            {/*I'd say, I am 70% front-end, 30% back-end. I am a passionate learner, hard worker, somewhat perfectionist, in deep love with JavaScript. Have masters in math.*/}
            {/*In IT since 2004. I like solving puzzles, producing good quality code, bringing outstanding ideas into the real world, discussing problems and working in a team.*/}
          {/*</p>*/}
        {/*</Block>*/}
        {/*<Block>*/}
          {/*<Title>Skills</Title>*/}
          {/*<Explanation>I am more front-end, than anything else, so I used to think I am good at</Explanation>*/}
          {/*<Skills />*/}
        {/*</Block>*/}
      {/*</Central>*/}
      {/*<Footer />*/}
    </Layout>
  );
};

// const IndexPage = () => (
//   <Layout>
//     <Container>
//       <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//       <h1>Hi people</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image />
//       </div>
//       <Link to="/page-2/">Go to page 2</Link>
//     </Container>
//   </Layout>
// )

export default IndexPage
