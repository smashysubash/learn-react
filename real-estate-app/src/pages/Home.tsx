import React from 'react'
import { Topcont } from '../containers/topcontainer/Topcont'
import { Midcont } from '../containers/middlecontainer/Midcont'
import { Navbar } from '../components/navbar/Navbar'
import { BottomCont } from '../containers/bottomcontainer/BottomCont'

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Topcont></Topcont>
      <Midcont></Midcont>
      <BottomCont></BottomCont>
    </>
  )
}
