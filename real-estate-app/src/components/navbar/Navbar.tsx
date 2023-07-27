
import { Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {IconDiv} from './style'
import { NavBar2 } from './style'

export const Navbar = () => {
  const navContainer = () =>{
    return (
      <Container fluid className='bg-transparent'>    
        <NavbarBs.Brand>
        <IconDiv >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
          </svg>
        </IconDiv>
        </NavbarBs.Brand>
        <NavbarBs.Toggle aria-controls='navbar-content'>
          <IconDiv>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>  
          </IconDiv>
        </NavbarBs.Toggle>
        <NavbarBs.Collapse id='navbar-content' className='justify-content-center'>
          <Nav>
            <Nav.Link href='#home'  className='me-4 text-light'>Home</Nav.Link>
            <Nav.Link href='#project' className='me-4 text-light'>Project</Nav.Link>
            <Nav.Link href='#aboutus' className='me-4 text-light'>About Us</Nav.Link>
          </Nav>
        </NavbarBs.Collapse>
      </Container>
    )
  }
  return (
      <NavBar2 expand='lg'className='sticky-top'>
        {navContainer()}
      </NavBar2>
  )
}