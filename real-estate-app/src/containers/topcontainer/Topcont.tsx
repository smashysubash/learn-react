import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { FrontLanding } from '../../components/fontlanding/FrontLanding'
import { HeadDiv, TriDiv } from './style'

export const Topcont = () => {
  return (
    <>
    <HeadDiv image='./images/photo3.jpg'> 
      <Navbar></Navbar>
      <FrontLanding></FrontLanding>
    </HeadDiv>
    </>
  )
}

