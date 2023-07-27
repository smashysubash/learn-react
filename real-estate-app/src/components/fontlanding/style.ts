import { Container } from 'react-bootstrap'
import styled from 'styled-components'

export const container = styled(Container)`
  margin-top: 20vh;
`

export const TitleHead = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-style: oblique;
  font-size: calc(1.5rem + 3.3vw);
  color: white;
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