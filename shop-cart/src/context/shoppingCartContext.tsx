import React, { ReactNode, createContext, useContext, useState } from 'react'
import { Shoppingcart } from '../components/Shoppingcart'
import { UseLocalStorage } from '../hooks/UseLocalStorage'

interface ShoppingCartContextint{
  openCart: ()=> void
  closeCart: ()=> void
  getItemQuantity: (id: number)=> number
  increaseCartQuantity: (id:number)=>void
  decreaseCartQuantity: (id:number)=>void
  removeFromCart: (id:number)=>void
  cartQuantity: number
  cartItems: CartItem[]
}


interface CartItem{
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextint)

export default function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

interface ShoppingCartProviderprops{
   children: ReactNode
}
export function ShoppingCartProvider({children}: ShoppingCartProviderprops){
  const [isOpen, setisOpen] = useState(false)
  const [cartItems, setCartItems] = UseLocalStorage<CartItem[]>('shoppingcart',[])
  const cartQuantity = cartItems.reduce((quantity,item)=>item.quantity+quantity,0 )
  
  const openCart = ()=> setisOpen(true)
  const closeCart = ()=> setisOpen(false)
  function getItemQuantity(id:number){
    return cartItems.find(item=>item.id===id)?.quantity||0;
  }
  function increaseCartQuantity(id:number){
    setCartItems((currItems)=>{
      if(currItems.find(item=>item.id===id)==null){
        return [...currItems,{id,quantity:1}]
      }else{
        return currItems.map(item=>{
          if(item.id===id){
            return {...item, quantity:item.quantity+1}
          }else{
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id:number){
    setCartItems(currItems=>{
      if(currItems.find(item=>item.id===id)?.quantity===1){
        return currItems.filter(item=>item.id!==id)
      }else{
        return currItems.map(item=>{
          if(item.id===id){
            return {...item, quantity:item.quantity-1}
          }else{
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id:number){
    setCartItems(currItem=>{
      return currItem.filter((item)=> id !== item.id)
    })
  }


  return <ShoppingCartContext.Provider value={{getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart,openCart,closeCart, cartItems, cartQuantity}}>
    {children}
    <Shoppingcart isOpen={isOpen}></Shoppingcart>
  </ShoppingCartContext.Provider>
}