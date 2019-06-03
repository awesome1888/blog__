import React from 'react';
import { List, Row, Container } from './style.js';
import { bool } from 'prop-types';
import Skill from '../Skill/index.js';

import javaScriptLogo from '../../images/logos/js.svg';
import gatsbyLogo from '../../images/logos/gatsbyjs.svg';
import nodeJsLogo from '../../images/logos/nodejs.svg';
import css3Logo from '../../images/logos/css.svg';
import lessLogo from '../../images/logos/less.svg';
import sassLogo from '../../images/logos/sass.svg';
import meteorLogo from '../../images/logos/meteorjs.svg';
import htmlLogo from '../../images/logos/html.svg';
import phpLogo from '../../images/logos/php.svg';
import reactLogo from '../../images/logos/reactjs.svg';
import reduxLogo from '../../images/logos/redux.svg';
import sagaLogo from '../../images/logos/saga.png';
import mysqlLogo from '../../images/logos/mysql.svg';
import postgresLogo from '../../images/logos/postgressql.svg';
import mongoDBLogo from '../../images/logos/mongodb.svg';
import dockerLogo from '../../images/logos/docker.svg';
import expressLogo from '../../images/logos/expressjs.svg';
import gitLogo from '../../images/logos/git.svg';
import awsLogo from '../../images/logos/aws.svg';
import serverlessLogo from '../../images/logos/serverless.svg';
import apolloLogo from '../../images/logos/apollo.svg';
import redisLogo from '../../images/logos/redis.svg';
import linuxLogo from '../../images/logos/linux.svg';
import styledComponentsLogo from '../../images/logos/styledcomponents.png';

const Skills = ({ main }) => {
    if (main) {
        return (
            <List>
                <Row>
                    <Container lg="4" sm="12">
                        <Skill
                            label="JavaScript"
                            logo={javaScriptLogo}
                            level="10"
                            iRound={true}
                        />
                    </Container>
                    <Container lg="4" sm="12">
                        <Skill label="React" logo={reactLogo} level="10" />
                    </Container>
                    <Container lg="4" sm="12">
                        <Skill label="HTML5" logo={htmlLogo} level="10" />
                    </Container>
                </Row>
            </List>
        );
    }

    return (
        <List>
            <Row>
                <Container lg="4" sm="12">
                    <Skill
                        label="JavaScript"
                        logo={javaScriptLogo}
                        level="10"
                        iRound={true}
                    />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="React" logo={reactLogo} level="10" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="HTML5" logo={htmlLogo} level="10" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="CSS3/BEM" logo={css3Logo} level="10" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill
                        label="NodeJS"
                        logo={nodeJsLogo}
                        level="8"
                        iOffs="1.5rem"
                        iHeight="61%"
                    />
                </Container>
                <Container lg="4" sm="12">
                    <Skill
                        label="LESS"
                        logo={lessLogo}
                        level="5"
                        iOffs="1.7rem"
                        iHeight="44%"
                    />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="SCSS" logo={sassLogo} level="2" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Redux" logo={reduxLogo} level="7" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill
                        label="Saga"
                        logo={sagaLogo}
                        level="3"
                        iOffs="1.0rem"
                        iHeight="61%"
                    />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="MongoDB" logo={mongoDBLogo} level="7" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="MySQL" logo={mysqlLogo} level="8" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Postgres" logo={postgresLogo} level="1" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Express" logo={expressLogo} level="8" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="GatsbyJS" logo={gatsbyLogo} level="2" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="MeteorJS" logo={meteorLogo} level="7" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Git" logo={gitLogo} level="9" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Docker" logo={dockerLogo} level="8" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="AWS" logo={awsLogo} level="2" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="PHP" logo={phpLogo} level="9" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Redis" logo={redisLogo} level="3" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="GraphQL" logo={apolloLogo} level="4" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill label="Serverless" logo={serverlessLogo} level="3" />
                </Container>
                <Container lg="4" sm="12">
                    <Skill
                        label="Linux"
                        logo={linuxLogo}
                        level="9"
                        iOffsH="0.5rem"
                    />
                </Container>
                <Container lg="4" sm="12">
                    <Skill
                        label="StyledComponents"
                        logo={styledComponentsLogo}
                        level="4"
                        techNameSize="0.9rem"
                    />
                </Container>
            </Row>
        </List>
    );
};

Skills.propTypes = {
    main: bool,
};

Skills.defaultProps = {
    main: false,
};

export default Skills;
