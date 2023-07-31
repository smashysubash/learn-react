import React from 'react'
import * as s from './style'
import { landingpage } from '../../data/landingpage'
import { Col, Container, Row } from 'react-bootstrap'

export const FrontLanding = () => {
  return (
    <>
      <s.container fluid='md'>
      <Row>
        <Col lg='7' >
          <Row>
            <Col xs='12'><s.TitleHead>{landingpage.front.heading}</s.TitleHead></Col>
            <s.Acol >
              <s.Button>{landingpage.front.expolrebutton}</s.Button>
              <s.Button2>{landingpage.front.vrbutton}</s.Button2>
            </s.Acol>
          </Row>
        </Col>
        <Col lg='4' className='d-flex align-items-center pt-3' >
          <s.playbutton> 
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="calc(.5rem + 1.5vw)">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
            </svg>
          </s.playbutton>
        </Col>
      </Row>
      </s.container>
    </>
  )
}
