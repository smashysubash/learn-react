import styled from "styled-components";
import { style } from "../../data/style";
import { Col, Image } from "react-bootstrap";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

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
  border: inset;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  padding:20px;
  margin-right: 30px;

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
position: relative;
&::before{
  content: '<--';
  position: absolute;
  color: ${style.fontcolor2};
  top: 35px;
  left: -5%;
  font-size: 28px;
}
`
export const ColorList =styled.div`
padding-bottom: 5px;
cursor: pointer;
&:first-child{
  color: ${style.fontcolor2};
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