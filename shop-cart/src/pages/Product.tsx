import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

interface productint{
    id: number
    title: string
    price: number
    description: number
    category: string
    image: string
    rating: {
        rate: number
        count: number
    }
}



export const Product = () => {
  const params = useParams()
  const [product,setProduct] = useState<null| productint>(null)
  const navigate = useNavigate();

  function goBack(){
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate('/', { replace: true });
    }
  } 
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${params.productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [params.productId])
  return (
    <>
    
    <div style={{cursor:'pointer', width:'max-content'}} onClick={goBack}>
      &lt;- Go back
    </div>
    <Row lg={2} md={2} xs={1} className='g-5 p-0'>
      <Col  className='d-flex justify-content-center border border-dark rounded bg-white overflow-hidden'> 
        <Image src={product?.image} style={{height:'200px'}} className='object-fit-contain '></Image>
      </Col>
      <Col >
      {product?.title}
      </Col>
    </Row>
    </>
  )
}
