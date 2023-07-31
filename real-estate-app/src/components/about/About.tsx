import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AboutDiv, TitleHead, AboutContainer, Aboutcont } from './style'
import { Fade } from "react-awesome-reveal";

export const About = () => {
  return (
    <>
      <AboutContainer fluid='md' id='about'>
        <Row  className='justify-content-center mb-5'>
          <Col xs='12' className='mb-5'>
          <Fade direction='up' triggerOnce duration={1500}>
            <AboutDiv>
              ABOUT DAX
            </AboutDiv>
          </Fade>
          </Col>
          <Col className='mb-4' md='9' xs='12'>
            <Fade direction='up' triggerOnce duration={1500}>
            <TitleHead>
              DAX is a modern residential comlex in your city
            </TitleHead>
            </Fade>
          </Col>
          <Col  className='mb-4' xs='12' md='7'>
            <Fade direction='up' triggerOnce duration={1500}>
            <Aboutcont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volu ptates doloribus ipsam odit harum quae corporis distinctio consequuntur vitae doloremque eius praesentium dolor placeat labore ab, accusamus ex quis similique porro.</Aboutcont>
            </Fade>
          </Col>
        </Row>
      </AboutContainer>
    </>
  )
}
