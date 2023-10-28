import React from 'react'
import ProductCard from "./components/ProductCard"
import Container from 'react-bootstrap/Container';
const Products = () => {
  return (
    <>
    <Container fluid className='mt-5'>
      <div className='bg-light shadow fw-bolder py-3 fs-1 ps-4 ' style={{borderLeft:"blue 5px solid "}}>
      Featured Products
      </div>
    <ProductCard/>
    </Container>
    </>
  )
}

export default Products