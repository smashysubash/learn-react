import {Col, Container } from 'react-bootstrap'
import styled from 'styled-components'

export const container = styled(Container)`
  transform: translateY(5vh);
  z-index: 5;
`

export const TitleHead = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: oblique;
  font-size: calc(1.5rem + 3.3vw);
  color: white;
  animation: show-text 2s .1s forwards ease-out;
  position: relative;
  
`

export const Button = styled.button`
 padding: 0 25px;
 height:48px;
 border: unset;
 border-radius: 0.4rem;
 color: #212121;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 1rem;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
 margin: 1rem;
 

&::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 0.4rem;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

&:hover {
  background-color: #212121;
 color: #e8e8e8;
}

&:hover::before {
 width: 100%;
}
`
export const Button2 = styled.button`
 font-size: 1rem;
 align-items: center;
 height: 48px;
 border-radius: 0.4rem;
 font-weight: 600;
 padding: 0 1.2rem;
 color: #ddd;
 border: none;
 box-shadow: 0 .5rem 1rem rgba(143, 142, 142, 0.15)!important;
 background: #000000;
 margin: 0 1rem 1rem 1rem;


&:hover {
 background: #2b2a2a;
}
`
export const playbutton = styled.button`
  margin-left:10vw;
  display: flex;
  justify-content: center;
  color: #fff;
  width: calc(1.5rem + 3.3vw);
  height: calc(1.5rem + 3.3vw);
  border-radius: 100%;
  background: linear-gradient(30deg, rgb(255, 130, 0) 20%, rgb(255, 38, 0) 80%);
  transition: all 0.3s ease-in-out 0s;
  box-shadow: rgba(193, 244, 246, 0.698) 0px 0px 0px 0px;
  animation: 1.2s cubic-bezier(0.8, 0, 0, 1) 0s infinite normal none running pulse;
  align-items: center;
  border: 0;

.button:is(:hover, :focus) {
  transform: scale(1.2);
}

@keyframes pulse {
  100% {
    box-shadow: 0 0 0 45px rgba(193,244,246,0);
  }
}
`
export const Acol = styled(Col)`
animation: show-text 2s .1s forwards ease-out;
`