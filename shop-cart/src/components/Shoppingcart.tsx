import React from 'react'
import { Offcanvas, Stack} from 'react-bootstrap'
import useShoppingCart from '../context/shoppingCartContext'
import { CardItem } from './CardItem'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'

interface shoppingcartprops {
  isOpen: boolean
}

export const Shoppingcart = ({isOpen}: shoppingcartprops ) => {
  const {closeCart,cartItems} = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton  >
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
        <Offcanvas.Body className='bg-light'>
          <Stack gap={3}>
            {cartItems.map(item=>( <CardItem key={item.id} {...item}></CardItem>))}
          { cartItems.length >0 ? 
            (<div className='ms-auto fw-bold fs-5'>
              Total {formatCurrency(cartItems.reduce((total,cartItem)=> {
                return total+(cartItem.quantity*((storeItems.find(i => i.id===cartItem.id)?.price||0)))
              },0))}
            </div>):
           (<div  className=' fw-bold fs-5' >Nothing Here!! Add Items to cart</div>)
           }
          </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}
