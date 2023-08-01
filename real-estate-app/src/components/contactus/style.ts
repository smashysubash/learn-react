import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { style } from '../../data/style'

export const Anchor = styled.a`
position: relative;
`

export const IconDiv = styled.div`
  margin-right: 10px;
  width: 60px;
  color: #ff3100;
  position: relative;
  &::before{
    content:'Dax';
    position: absolute;
    left: 32px;
    font-weight: bold;
    font-family: cursive;
    font-size: 22px;    
  }
`
export const SocialLink = styled.a`
width: 24px;
height: 24px;
display: block;
text-decoration:  none;
margin: 5px;
`
export const SocioDiv = styled.div`
margin-left: 10px;
display: flex;
justify-content: center;
`
export const BlackRow = styled(Row)`
background-color: #282e35;
color: white;
display: flex;
justify-content: center;
padding: 80px 0 80px 0;
`

export const Div2 = styled.div`
  font-size: 12px;
`
export const TitleDiv = styled.div`
  font-variant: uppercase;
  display: inline;
  text-align: center;
  padding-left:20px;
  font-size: calc(1rem + 0.3vw);
  font-weight: bold;
  color: ${style.fontcolor2};
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
export const Headdiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: calc(1.5rem + 2.3vw);
  color: white;
`
export const Adddiv = styled.div`
  font-size: 24px;
  color: white;
`
export const MapDiv = styled.div`
  background-image: linear-gradient( rgb(74, 81, 91,0.5),  rgb(74, 81, 91,0.5)  ), url('/images/map.jpg');
  padding: 70px 0 100px 0;
`
export const MapLink = styled.a`
text-decoration: none;
color: white;
cursor: pointer;
&:hover{
  color: ${style.fontcolor2};
}
`
export const Curve = styled.div`
  position: relative;
  bottom: 10px;
  width: 100%;
  height: auto;
  z-index: 1;
`