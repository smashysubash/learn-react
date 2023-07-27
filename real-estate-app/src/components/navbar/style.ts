import styled  from 'styled-components'
import { Navbar } from 'react-bootstrap'

export const IconDiv = styled.div`
  width: 30px;
  color: white;
`
export const NavBar2 = styled(Navbar)`
position: sticky;
top: 0;
  font-size: 1rem;
  font-weight: 1000;
  z-index: 10;
background: rgba(255, 255, 255, 0.22);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(4.1px);
-webkit-backdrop-filter: blur(4.1px);
`

