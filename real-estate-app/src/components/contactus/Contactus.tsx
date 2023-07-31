import React from 'react'
import { Col, Container, Row,Image } from 'react-bootstrap'
import { Anchor } from './style'

export const Contactus = () => {
  return (
    <>
    <hr></hr>
    <Container className='mt-5 mb-5'>
      <Row className='mt-5 mb-5 d-flex align-items-baseline'>
        <Col><Anchor href='#' className='mt-3 mb-3 d-flex justify-content-center'><Image width={'125px'} src='/images/client1.png'></Image></Anchor></Col>
        <Col><Anchor href='#' className='mt-3 mt-3 d-flex justify-content-center'><Image width={'125px'} src='/images/client2.png'></Image></Anchor></Col>
        <Col><Anchor href='#' className='mt-3 mt-3 d-flex justify-content-center'><Image width={'125px'} src='/images/client3.png'></Image></Anchor></Col>
        <Col><Anchor href='#' className='mt-3 mt-3 d-flex justify-content-center'><Image width={'110px'} src='/images/client4.png'></Image></Anchor></Col>
      </Row>
    </Container>
    </>
  )
}
