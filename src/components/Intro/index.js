import React from 'react';
import {
  Container,
  BackgroundImage,
  ImageOverlay,
  DataContainer,
  DataColumn,
  HelloBlock,
  NameBlock,
  GreetingBlock,
  SocialBar,
  HelloLeft,
  HelloRight,
  Arrow,
} from './style.js';
import { StaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar/index.js';
import Social from '../Social/index.js';
import Menu from '../Menu/index.js';

export default () => {
  return (
    <StaticQuery
      query={
          graphql`
              query {
                backgroundImage: file(relativePath: { eq: "header.jpg" }) {
                    childImageSharp {
                        sizes(maxWidth: 1240, quality: 80) {
                            ...GatsbyImageSharpSizes
                          }
                    }
                }
            }
        `
    }
      render={data => (
        <Container>
          <BackgroundImage sizes={data.backgroundImage.childImageSharp.sizes} />
          <ImageOverlay />
          <Menu />
          <DataContainer>
            <DataColumn>
              <HelloBlock>
                <HelloLeft>
                  <Avatar />
                </HelloLeft>
                <HelloRight>
                  <NameBlock>
                    Sergei Gannochenko
                  </NameBlock>
                  <GreetingBlock>
                    JavaScript full-stack software engineer in Berlin, Germany.
                  </GreetingBlock>
                  <SocialBar>
                    <Social linkedin src="https://www.linkedin.com/in/sergey-gannochenko" />
                    <Social twitter src="https://twitter.com/Gannochenkoff" />
                    <Social medium src="https://medium.com/@awesome1888" />
                    <Social github src="https://github.com/awesome1888" />
                  </SocialBar>
                </HelloRight>
              </HelloBlock>
            </DataColumn>
          </DataContainer>
          <Arrow />
        </Container>
      )}
    />
  );
};
