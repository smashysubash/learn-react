import styled from "styled-components"
import {style} from '../../data/style'
import { Container } from "react-bootstrap"

export const AboutDiv = styled.div`
  text-align: center;
  font-size: calc(1rem + 0.3vw);
  font-weight: bold;
  color: ${style.fontcolor1};
  &::before{
    content: '_____';
    vertical-align: super;
  }
  &::after{
    content: '_____';
    vertical-align: super;
  }
  animation: show-text 2s .1s forwards ease-out;
`
export const TitleHead = styled.h1`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: calc(1.5rem + 2.5vw);
  color: ${style.fontcolor2};
`

export const AboutContainer = styled(Container)`
  background-repeat: no-repeat;
  background-size: 25vw;
  background-position: top left 10px;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iI0ZGRjVFMiIgY2xhc3M9InctNiBoLTYiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTIuMjUgMjFoMTkuNW0tMTgtMTh2MThtMTAuNS0xOHYxOG02LTEzLjVWMjFNNi43NSA2Ljc1aC43NW0tLjc1IDNoLjc1bS0uNzUgM2guNzVtMy02aC43NW0tLjc1IDNoLjc1bS0uNzUgM2guNzVNNi43NSAyMXYtMy4zNzVjMC0uNjIxLjUwNC0xLjEyNSAxLjEyNS0xLjEyNWgyLjI1Yy42MjEgMCAxLjEyNS41MDQgMS4xMjUgMS4xMjVWMjFNMyAzaDEybS0uNzUgNC41SDIxbS0zLjc1IDMuNzVoLjAwOHYuMDA4aC0uMDA4di0uMDA4em0wIDNoLjAwOHYuMDA4aC0uMDA4di0uMDA4em0wIDNoLjAwOHYuMDA4aC0uMDA4di0uMDA4eiIgLz4KPC9zdmc+Cg==');
`
export const Aboutcont = styled.p`
  font-size: calc(0.8rem + 0.4vw);
`