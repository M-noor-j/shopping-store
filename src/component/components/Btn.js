import React from 'react'
import Button from 'react-bootstrap/Button';
const Btn = ({label}) => {
  return (
    <Button className='btn-bg border-0 fw-bold px-4 py-2' style={{letterSpacing:"1px"}}>{label}</Button>
  )
}

export default Btn