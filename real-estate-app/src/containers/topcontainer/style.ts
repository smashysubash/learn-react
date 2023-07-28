import styled from "styled-components"

export const hello = ''

interface imgprops {
  image: string
}

export const HeadDiv = styled.div<imgprops>`
  height: min(130vh,1000px);
  background-image: url(${props=> props.image});
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover; 
  background-position: center; 
  clip-path: polygon(0% 0%, 100% 0%, 100% 73.3%, 82.54% 92.52%, 44.24% 82.38%, 11.36% 98.03%, 0% 74.17%);
  background-color: #000000;
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