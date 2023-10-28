import React from 'react'

import heroimg from "../assets/heroimg.png"
import Btn from './components/Btn'
const Hero = () => {
  return (
  <>
   <div className=' bg-hero d-flex justify-content-center align-items-center text-white' style={{height:"100vh"}}>
    <div className='container-fluid '>
       <div className='row'>
        <div className='col-lg-6 d-flex align-items-center'>
         <div>
          <div className='display-1 fw-bold hero-heading'>Admire Stylish <br/> Bresses & Looks</div>
          <p className='text-dark fs-5 mt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum</p>
          <div className='mt-4 '>
          <Btn label="Let's Shop"/>
          </div>
          </div>
         </div>
        <div className='col-lg-6'>
          <div className='d-flex justify-content-end'>
          <img src={heroimg} className='w-100'></img>
          </div>
        </div>
       </div>
    </div>
   </div>
  </>
  )
}

export default Hero;