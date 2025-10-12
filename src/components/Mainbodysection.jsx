import React from 'react'
import Image from 'react-bootstrap/Image';
import hero from "../assets/hero.png";
import car from "../assets/car.png";
import '../App.css';
function Mainbodysection() {
  return( <>
  <div className="hero-container"><Image src={hero}fluid /></div>
   <div className="hero-text">
        <h1 className="animate__animated animate__fadeInUp " style={{animationDelay:"0.1s",color: "#05155dff" }}>Lifelong memories just a</h1>
        <h1 className="animate__animated animate__fadeInUp" style={{animationDelay:"0.1s",color: "#05155dff"}}>few seconds away</h1>
        <h6 className="animate__animated animate__fadeInUp" style={{animationDelay:"0.1s",color: "#05155dff"}}>Let's start your journey with us,your dream will come true</h6>
        <button className="custom-btn1 animate__animated animate__bounceIn"style={{ animationDelay: "1s",color: "##05155dff" }}>
        Explore Destinations
        </button>
      </div>
      <div className="car-running-container">
            <Image src={car} fluid />
      </div>
      
  </>)
  
}

export default Mainbodysection