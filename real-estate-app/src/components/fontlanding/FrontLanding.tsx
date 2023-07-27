import React from 'react'
import * as s from './style'
import { landingpage } from '../../data/landingpage'
import { Col, Container, Row } from 'react-bootstrap'

export const FrontLanding = () => {
  return (
    <>
      <s.container fluid='md' >
      <Row>
        <Col lg='7' >
          <Row>
            <Col xs='12'><s.TitleHead>{landingpage.front.heading}</s.TitleHead></Col>
            <Col>
              <s.Button>{landingpage.front.expolrebutton}</s.Button>
              <s.Button2>{landingpage.front.vrbutton}</s.Button2>
            </Col>
          </Row>
        </Col>
        <Col >
        </Col>
      </Row>
      </s.container>
    </>
  )
}
