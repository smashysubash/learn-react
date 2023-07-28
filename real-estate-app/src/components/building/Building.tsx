import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { Aboutcont, Button2, TitleHead } from './style'
import { landingpage } from '../../data/landingpage'

export const Building = () => {
  const divivsion = ()=>{
    return (
      <Container fluid='md'>
        <Row  className='justify-content-center' >
          <Col className='mt-5 mb-4' xs='12' md='9'>
            <TitleHead>
               Location, Community, Quality Living. It Starts Here!
            </TitleHead>
          </Col>
          <Col  className='mb-4' xs='12' md='9'>
            <Aboutcont>Volu ptates doloribus ipsam odit harum quae corporis distinctio consequuntur vitae doloremque eius praesentium dolor placeat labore ab, accusamus ex quis similique porro.</Aboutcont>
          </Col>
          <Col className='mb-4' xs='12' md='9'>  
            <Button2>{landingpage.front.vrbutton}</Button2>
          </Col>
          <Col className='mt-5' xs='12' md='10'>
            <Image src='/images/image2.jpg' fluid rounded></Image>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <>
    <Row className='mt-4'>
      <Col sm='5'className='p-4'>
        <Image src='/images/image1.jpg' fluid rounded></Image>
      </Col>
      <Col className='mt-5'>
          {divivsion()}
      </Col>
    </Row>
    </>
  )
}
