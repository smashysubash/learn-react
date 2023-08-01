import styled  from 'styled-components'
import { Nav, Navbar } from 'react-bootstrap'
import {style} from '../../data/style'

export const IconDiv = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 30px;
  color: white;
  position: relative;
  &::before{
    content:'Dax';
    position: absolute;
    left: 33px;
    top: 2.5px;
    font-weight: bold;
    font-family: cursive;
    font-size: 22px;    
  }
`
export const Threeline = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  width: 30px;
  color: white;
`
export const NavBar2 = styled(Navbar)`
position: sticky;
top: 0;
  font-size: 1rem;
  font-weight: 600;
  z-index: 10;
  background: rgba( 62, 59, 59, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 7.5px );
-webkit-backdrop-filter: blur( 7.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const NavLink = styled(Nav.Link)`
color: white;
&:hover{
  color: ${style.fontcolor2};
}
`

