import React from 'react'
import Image from 'react-bootstrap/Image';
import about from '../assets/about.png';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Mainbodysectionthree() {
  return (
    <>
    <div className='div1'>
        <div className='hero-container'style={{}}>
<Image src={about}fluid />
        </div>
        <div className='sp'style={{marginTop:'320px',marginLeft:'50px'}}>
 <Card style={{ 
    border:'none'}}>
      
      <Card.Body style={{border:'none'}}>
        <Card.Title></Card.Title>
        <Card.Text>
          <h6 style={{color:'blue'}}>About US</h6>
          <h1 style={{color: "#05155dff"}}>Get Ready For Real</h1>
          <h1 style={{color: "#05155dff"}}>Time Adventure</h1>
          <h6>Let’s start your journey with us, your dream will come true.</h6>
          <h6> Lorem ipsum dolor sit amet, consectetur adipisicing elit,</h6>
          <h6> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
          <h6> Ut enim ad minim veniam quis nostrud exercitation.</h6>
        </Card.Text>
      </Card.Body>
        <button className="custom-btn2 animate__animated animate__bounceIn"style={{ animationDelay: "1s",color: "##05155dff",width:'150px',marginLeft:'15px ' }}>Book Your Destination</button>

    </Card>
        </div>
    </div>
    </>
  )
}

export default Mainbodysectionthree