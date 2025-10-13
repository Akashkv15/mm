import React from 'react'
import Image from 'react-bootstrap/Image';
import bg from '../assets/section_bg1.png'
import pearson from '../assets/founder-img.png'
function Mainbodysectionfour() {
  return (
    <div style={{marginTop:'10px'}}>
        <div className="hero-container" style={{position:"relative",overflow:"hidden"}}>
            <Image src={bg} style={{height:'650px'}}fluid />
            <div className="abc"style={{position:"absolute",top:"-2%",left:"50%",transform:"translate(-50%, 50%)",color:"white"}}>
            <h1>What Customers Say</h1>
            <h5>"Let's start your journey with us your dream will true.Lorem ipsum </h5>
            <h5>dolor sit amet consectetur adipisicing elit. samus ducimus magni aliquam </h5>
            <h5>ut labore et dolore magna aliqua"</h5>
            <h4><Image src={pearson} style={{marginTop:'10px',marginBottom:'20px'}}fluid/> Mark Antony</h4>
            
            </div>
            
       </div>
    </div>
  )
}

export default Mainbodysectionfour