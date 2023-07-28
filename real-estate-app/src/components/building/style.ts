import styled from "styled-components";
import { style } from "../../data/style";

export const TitleHead = styled.h1`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: calc(1rem + 2vw);
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
