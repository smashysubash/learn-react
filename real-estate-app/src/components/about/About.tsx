import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AboutDiv, TitleHead, AboutContainer, Aboutcont } from './style'

export const About = () => {
  return (
    <>
      <AboutContainer fluid='md'>
        <Row  className='justify-content-center'>
          <Col xs='12' className='mb-5'>
            <AboutDiv>
              ABOUT DAX
            </AboutDiv>
          </Col>
          <Col className='mb-4' md='9' xs='12'>
            <TitleHead>
              DAX is a modern residential comlex in your city
            </TitleHead>
          </Col>
          <Col  className='mb-4' xs='12' md='7'>
            <Aboutcont>Lorem ipsum dolor sit amet consectetur adipisicing elit. Volu ptates doloribus ipsam odit harum quae corporis distinctio consequuntur vitae doloremque eius praesentium dolor placeat labore ab, accusamus ex quis similique porro.</Aboutcont>
          </Col>
        </Row>
      </AboutContainer>
    </>
  )
}
