import React from 'react'

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { AiFillStar } from "react-icons/ai";

import { Link } from 'react-router-dom';
const ProductCard = () => {
const data=[
    {
      id:"1",
        title: "Linux Headphone",
      img:" https://pngimg.com/d/headphones_PNG7658.png",
      description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"
    },
    {
      id:"2",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"3",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"4",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"5",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"6",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"7",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"8",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"9",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"10",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
    {
      id:"11",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },
      {
        id:"12",
        title: "Linux Headphone",
        img:" https://pngimg.com/d/headphones_PNG7658.png",      
        description:
      "Loream ipsum dolor sit amet co Loream ipsum dolor sit amet co tnsecter adipiscing tnsecter adipiscing"    },

]
    
  return (
    <>
    <Row className='mt-5'>
    {data.map(( item,index)=>(
     <Col xs={12} sm={6} lg={4} xxl={3}  key={index}  className='mt-4'>
     <Link to={`/product/${item?.id}`} className='text-decoration-none'>
    <div className='bg-dark  rounded py-4 border'>
      <div className='d-flex justify-content-center'>
       <img src={item.img} className='w-75'/>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='px-4'>
      <div className='text-white fs-5 fw-bold ls-widest'>{item.title}</div>
      <div className='text-white mt-2'>{item.description}</div> 
     <div className='row mt-2'>
        <div className='col'>
          <div className='text-white fs-2 fw-bold'>$20</div>
        </div>
        <div className='col'>
          <div className='d-flex flex-column align-items-center'>
        <div className='text-white'>15% Discount</div>
        <div className='text-warning gap-3'><AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /></div>
        </div>
        </div>
        </div>  
      </div>     
    </div>
    </div>
    </Link>
    </Col>
    ))}
    </Row>
    

  </>
  )
}

export default ProductCard