import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
const ProductDetails = (item) => {
    const {id}=useParams();
    
    console.log(id)
  return (
    <>
    <Container fluid>
        <div className='fs-1 text-dark'>
          
          {id}
        </div>
        <div className='text-dark'>{item.title}</div>
        
    </Container>
    </>
  )
}

export default ProductDetails