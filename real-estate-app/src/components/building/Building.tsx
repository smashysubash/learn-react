import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import  { Pcontainer, Aboutcont, Button2, TitleHead, Pimage, QuoteDiv,NameDiv, Playbutton, Imgcontainer } from './style'
import { landingpage } from '../../data/landingpage'
import {Fade} from 'react-awesome-reveal'

export const Building = () => {
  const divivsion = ()=>{
    return (
      <Container fluid='md'>
        <Row  className='justify-content-center mt-3' >
        <Fade direction='up' triggerOnce duration={1000}>
          <Col className='mb-4' xs='12' md='9'>
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
          {/* <Col className='mt-1' xs='12' md='10'>
            <Image src='/images/image2.jpg' fluid rounded></Image>
          </Col> */}
          </Fade>
        </Row>
      </Container>
    )
  }

  return (
    <>
    <Row className='mt-4'>
      <Col sm='5' md='6' className='p-4 d-flex align-self-center justify-content-center' >
        <Fade direction='left' triggerOnce duration={1500}>
        <Image style={{height: '500px'}} src='/images/image1.jpg' fluid rounded></Image>
        </Fade>
      </Col>
      <Col className='mt-5'>
          {divivsion()}
      </Col>
    </Row>
    <Pcontainer >
      <Row className='justify-content-center'>
        <Col lg='8' sm='10'>
        <Pimage src='/images/avathar2.jpg' ></Pimage>
        </Col>
        <QuoteDiv lg='8' sm='10' className='mt-5'>“Quis lectus nulla at volutpat diam. Sed nisi lacus sed viverra tellus in hac. Enim nunc faucibus a pellentesque sit. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Risus ultricies tristique nulla aliquet enim tortor.”</QuoteDiv>
        <Col lg='8' sm='10' className='mt-3'><NameDiv>Philip Demarco </NameDiv>Lead architect and partner</Col>
      </Row>
    </Pcontainer>
    <Imgcontainer className='mt-5' image='/images/image2.jpg'>
    <Pcontainer fluid='sm' className='ps-5 pe-5'>
      <Row className='d-flex justify-content-center'>
        <Col className='justify-content-center d-flex ps-5 pe-5' xs='12'>
          <Playbutton> 
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
            </svg>
          </Playbutton>
        </Col >
        <Col sm='10' md='7' className='mt-5 mb-5 text-center d-flex justify-content-center '><TitleHead >Discover the true definition of luxury</TitleHead>
        </Col>
      </Row>
    </Pcontainer>
    </Imgcontainer>
    </>
  )
}
