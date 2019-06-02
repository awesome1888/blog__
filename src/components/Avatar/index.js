import React from 'react';
import {
  Container,
  Image,
} from './style.js';
import { StaticQuery, graphql } from 'gatsby';

export default () => {
  return (
    <StaticQuery
      query={
        graphql`
              query {
                file(relativePath: { eq: "avatar2.jpg" }) {
                    childImageSharp {
                        sizes(maxWidth: 200, quality: 80) {
                            ...GatsbyImageSharpSizes
                          }
                    }
                }
            }
        `
      }
      render={data => (
        <Container>
          <Image sizes={data.file.childImageSharp.sizes} />
        </Container>
      )}
    />
  );
};
