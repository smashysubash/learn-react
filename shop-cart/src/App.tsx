import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home'
import Store from './pages/Store';
import { NavBar } from './components/NavBar';
import { ShoppingCartProvider } from './context/shoppingCartContext';
import { Product } from './pages/Product';

function App() {
  return (
    <>
    <ShoppingCartProvider>
    <NavBar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/store' element={<Store />}/>
        <Route path='/product/:productId' element={<Product />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
    </>
  );
}

export default App;
