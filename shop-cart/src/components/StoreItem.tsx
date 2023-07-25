import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { formatCurrency } from '../utilities/formatCurrency'
import useShoppingCart from '../context/shoppingCartContext'
import { useNavigate } from 'react-router-dom'

interface StoreItemProps{
  id: number,
  name: string,
  price: number,
  image: string
}

export const StoreItem = ({id,name,price,image}: StoreItemProps) => {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
  const quantity: number = getItemQuantity(id);
  const navigate = useNavigate();
  function cardClick(id: number){
    navigate(`/product/${id}`)
  }
  return (
    <>
    <Card className='h-100 overflow-hidden' onClick={()=>cardClick(id)}style={{cursor:'pointer'}} >
      <Card.Img className='card-img' variant='top' src={image} height='200px' style={{objectFit:'contain'}}></Card.Img>
      <Card.Body className='d-flex flex-column' >
        <Card.Title   className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='fs-5' style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
        <div className='mt-auto'>
          {quantity===0?(
            <Button className='w-100 ' onClick={(e)=>{e.stopPropagation(); return increaseCartQuantity(id);}}>Add to Cart</Button>
          ):(<div className='d-flex align-items-center flex-column' style={{gap:'0.5rem'}}>
            <div className='d-flex align-items-center justify-content-center' style={{gap:'0.5rem'}}>
              <Button onClick={(e)=>{e.stopPropagation(); return decreaseCartQuantity(id);}}>-</Button>
              <div><span className='fs-4'>{quantity}</span> In cart</div>
              <Button onClick={(e)=>{e.stopPropagation(); return increaseCartQuantity(id);}}>+</Button>
            </div>
            {/* <Button variant='danger' onClick={()=>removeFromCart(id)}>Remove</Button> */}
          </div>
          )}
        </div>
      </Card.Body>
    </Card>
    </>
  )
}
