import styled from "styled-components";
import { style } from "../../data/style";
import { Col, Container, Image } from "react-bootstrap";
import { landingpage } from "../../data/landingpage";

interface imgp {
  image: string;
}

export const TitleHead = styled.h1`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: calc(1rem + 2.5vw);
  color: ${style.fontcolor2};
`

export const Aboutcont = styled.p`
  font-size: calc(0.8rem + 0.4vw);
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

export const Pimage = styled(Image)`
  border-radius: 50%;
  height: min(270px, 40vw);
`

export const Pcontainer = styled(Container)`
  padding-top: 100px;
  position: relative;

  &::before{
    content:'';
    z-index:-1;
    height: 1px;
    width: 120vw;
    background-color: #9c9595;
    position: absolute;
    left: -20vw;
    top: 35%; 
    transform: rotate(8deg);
  }
` 

export const Imgcontainer = styled.div<imgp>`
  background-image: url(${prop=>prop.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
` 

export const QuoteDiv = styled(Col)`
  color: orange;
  font-size: calc(1rem + 1.2vw ) ;
`

export const NameDiv = styled.div`
  color: ${style.fontcolor3};
  text-transform: uppercase;
  font-weight: bold;
`

export const Playbutton = styled.button`
  display: flex;
  justify-content: center;
  color: #fff;
  width: 80px;
  height: 80px;
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