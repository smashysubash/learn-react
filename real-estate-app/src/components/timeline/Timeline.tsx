import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Aboutcont, ArrDiv, ColorList, ImgComp, Roundlist, TimeDiv, TitleHead } from './style'
import { tldata } from '../../data/timeline'

interface contarray {
  no: number;
  title : string;
  description : string;
  imageurl :string;
}

const iterateFromArrayCircular= (arr: contarray[], startIndex: number)=> {
  let rarr=[];
  for (let i = startIndex; i < arr.length + startIndex; i++) {
    rarr.push(arr[i % arr.length]);
  }
  return rarr;
}

const Listcomp = ( {data} : {data : contarray})=>{
  return (
    <>
      <Roundlist></Roundlist>
      <div>
        <div className='fs-4 fw-bold'>{data.title}</div>
        <div className='fs-6'>{data.description}</div>
      </div>
    </>
  )
}

const Subcomp = ()=>{
  const [index, setIndex] = useState(0)
  const Clickonitem = (no: number)=>{
    setIndex(no-1)
  }
  return(
    <>
      <ImgComp md='6' xs='10' lg='6' className='pt-5' key={index} ><Image fluid rounded src={tldata[index]?.imageurl} ></Image></ImgComp>
      <Col xs='10' md='5' lg='5' ><ArrDiv className='m-5 p-3'>{iterateFromArrayCircular(tldata, index).map(item=> <ColorList key={item.no} onClick={()=>Clickonitem(item.no)} className='d-flex align-items-center m-3' ><Listcomp  data={item}></Listcomp></ColorList>)}</ArrDiv></Col>
    </>
  )
}

export const Timeline = () => {
  return (
    <>
    <Row className='text-left justify-content-center mt-5' id='project'>
      <Col sm='11' lg='12' className='mb-3'><TimeDiv> TIMELINE </TimeDiv></Col>
      <Col sm='11' xs='12' lg='6'><TitleHead>Where innovation will inspire you</TitleHead></Col>
      <Col sm='11' xs='12' lg='6'><Aboutcont>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam dignissim diam quis enim lobortis.</Aboutcont></Col>
      <Subcomp ></Subcomp>
    </Row>
    </>
  )
}
