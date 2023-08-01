import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AboutDiv, TitleHead, AboutContainer, Aboutcont } from './style'
import { Fade } from "react-awesome-reveal";
import { landingpage } from '../../data/landingpage';

export const About = () => {
  return (
    <>
      <AboutContainer fluid='md' id='about'>
        <Row  className='justify-content-center mb-5'>
          <Col xs='12' className='mb-5'>
          <Fade direction='up' triggerOnce duration={1200}>
            <AboutDiv>
              {landingpage.about.title}
            </AboutDiv>
          </Fade>
          </Col>
          <Col className='mb-4' md='9' xs='12'>
            <Fade direction='up' triggerOnce duration={1200}>
            <TitleHead>
              {landingpage.about.headdiv}
            </TitleHead>
            </Fade>
          </Col>
          <Col  className='mb-4' xs='12' md='7'>
            <Fade direction='up' triggerOnce duration={1200}>
            <Aboutcont>{landingpage.about.contentdiv}</Aboutcont>
            </Fade>
          </Col>
        </Row>
      </AboutContainer>
    </>
  )
}
