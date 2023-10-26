import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Btn from "./Btn"
const ProductCard = () => {
const data=[
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
    {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },
      {
        title: "Mobile App Development",
      img: "https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=J8VH-3bYGHRqot-2zsfkQ-V0BGK4f2pKNIkyQ4DNxhA=",
      description:
        "Coding Master is at the vanguard of crafting intuitive and dynamic mobile applications that are designed to elevate user experience to new heights. From the inception of an idea to its successful deployment, we collaborate with our clients to bring their visionary concepts to fruition on the cutting edge of technology.",
    },

]
    
  return (
    <>
    <Row>
    {data.map(( item,index)=>(
     <Col xs={12} lg={4} sm={6} key={index} className='mt-4'>
      <Card className=''>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
        {item.description}
        </Card.Text>
        <Btn label="Purchase now"></Btn>
      </Card.Body>
    </Card>
    </Col>
    ))}
    </Row>
    

  </>
  )
}

export default ProductCard