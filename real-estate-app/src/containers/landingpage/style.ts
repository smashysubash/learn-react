import styled from "styled-components"

export const hello = ''

interface imgprops {
  image: string
}

export const HeadDiv = styled.div<imgprops>`
  height: min(122vh,900px);
  background-image: linear-gradient( rgba(0, 0, 0, 0.3),  rgba(0, 0, 0, 0.3)  ), url(${props=> props.image});
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover; 
  background-position: center; 
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 73.3%, 82.54% 92.52%, 44.24% 82.38%, 11.36% 98.03%, 0% 74.17%); */
  background-color: #000000;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
`

export const TriDiv = styled.div`
    position:relative;
   width: 200px;
   height: 200px;
   border-style: solid;
   border-width: 200px 0 0 200px;
   border-color: transparent transparent transparent rgba(255, 255, 255, 0.22);
   transform: rotate(-10deg);
   background: rgba(255, 255, 255, 0.22);

`

export const HDiv =styled.div`
height: min(120vh,1000px);
`

export const Curve = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 1;
`