import React, { createContext, useContext } from 'react'

const ShoppingCartContext = createContext({})

export default function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
