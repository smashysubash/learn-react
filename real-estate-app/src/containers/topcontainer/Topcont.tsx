import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { FrontLanding } from '../../components/fontlanding/FrontLanding'
import { HDiv, HeadDiv, TriDiv, Curve } from './style'

export const Topcont = () => {
  return (
    <>
    <HeadDiv image='./images/photo2.jpg'  id='home'> 
      <FrontLanding></FrontLanding>
      <Curve>
      <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270">
            <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" stroke-width="120" stroke-linecap="round" />
        </svg>
      </Curve>
    </HeadDiv>
    <HDiv></HDiv>
    </>
  )
}

