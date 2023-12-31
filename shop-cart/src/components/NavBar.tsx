import React from 'react'
import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import useShoppingCart from '../context/shoppingCartContext'

export const NavBar = () => {
  const { openCart, cartQuantity} = useShoppingCart()
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
      <Container>
        <Nav>
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Button onClick={openCart} style={{width:'2.9rem',height:'2.9rem'}} className='rounded-circle' variant='outline-primary-black'>
        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        {cartQuantity>0 &&(
        <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center ' style={{color:'white', width:'1rem', height:'1rem',position:'relative',bottom:'0.5rem',right:'-0.8rem', fontSize:'0.7rem'}}>
          {cartQuantity}
        </div>
        )}
        </Button>
      </Container>
    </NavbarBs>
  )
}
