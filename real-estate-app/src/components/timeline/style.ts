import styled from "styled-components";
import { style } from "../../data/style";
import { Col, Image } from "react-bootstrap";

export const TimeDiv = styled.div`
  display: inline;
  text-align: center;
  padding-left:20px;
  font-size: calc(1rem + 0.3vw);
  font-weight: bold;
  color: ${style.fontcolor1};
  margin-top: 40px;
  &::before{
    content: '_____ ';
    vertical-align: super;
  }
  &::after{
    content: ' _____';
    vertical-align: super;
  }
`

export const TitleHead = styled.h1`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: calc(1.5rem + 2.5vw);
  color: ${style.fontcolor2};
  padding-left: 20px;
`
export const Aboutcont = styled.p`
  font-size: calc(0.8rem + 0.4vw);
  padding-right: 20px;
`
export const Roundlist =styled.div`
  position : relative;
  border: solid 1px black;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  padding:20px;
  margin-right: 20px;
  &::after{
  position: absolute;
	content:'';
  width: 10px;
  height: 10px;
  background-color: black;
  /* transform: translate(50%,50%); */
  border-radius: 50%;
  transform: translate(-50%, -50%);
  }
`
export const ArrDiv = styled.div`
padding: 5px;
padding-left: 5vw;
padding-top: 20px;
`
export const ColorList =styled.div`
padding-bottom: 5px;
position: relative;
cursor: pointer;
&:first-child{
  color: ${style.fontcolor2};
}
&:first-child::before{
  position: absolute;
  left: -45px;
  top: -5px;
  content: '←';
  font-size: 2.5rem;
  padding-right: 5px;
}
&:first-child::after{
    position: absolute;
    content:'';
    left: -10px;
    width: 60px;
    height: 60px;
    border: solid 1px ;
    border-radius: 50%;
  }
animation: myAnim 1s linear 0s 1 normal forwards;
@keyframes myAnim {
	0% {
		opacity: 0;
		transform: translateY(250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
`

export const ImgComp = styled(Col)`
  animation: myAnim 1s ease-out 0s 1 normal forwards;
  @keyframes myAnim {
	0% {
		opacity: 0.3;
	}

	100% {
		opacity: 1;
	}
}
`