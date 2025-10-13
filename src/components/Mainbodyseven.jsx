import React from 'react'
import Image from 'react-bootstrap/Image';
import instra1 from '../assets/instra1.png';
import instra3 from '../assets/instra3.png';
import instra4 from '../assets/instra4.png';
import instra5 from '../assets/instra5.png';
import logo2 from '../assets/logo2_footer.png';

function Mainbodyseven() {
  return (
    <>
      <div className='st d-flex flex-md-row justify-content-center align-items-center mt-5'>
        <div><Image src={instra1} fluid /></div>
        <div><Image src={instra3} fluid /></div>
        <div className='d-none d-md-block'><Image src={instra4} fluid /></div>
        <div className='d-none d-md-block'><Image src={instra5} fluid /></div>
        <div className='d-none d-md-block'><Image src={instra1} fluid /></div>
      </div>

      {/* ✅ changed below: removed "flex-column flex-md-row" and added class 'basebody' CSS will handle layout */}
      <div className='basebody d-flex justify-content-center gap-3 gap-md-5 p-3' style={{ backgroundColor: '#05155dff' }}> 
        {/* ⬅️ Added padding and removed inline flex-direction logic */}

        <div className='div1 d-flex flex-column align-items-start p-4'> {/* ⬅️ changed p-5 to p-4 for spacing */}
          <Image src={logo2} fluid />
          <h6 style={{ color: 'grey', marginTop: '10px' }}>Land behold it created good saw after she'd Our set </h6>
          <h6 style={{ color: 'grey' }}>living. Signs midst dominion creepeth morning </h6>
          <h6 style={{ color: 'grey' }}>laboris nisi ufsit aliquip.</h6>
          <h6 style={{ color: 'grey', letterSpacing: '15px', marginTop: '5px' }}>
            <i className="bi bi-twitter"></i> <i className="bi bi-facebook"></i> <i className="bi bi-linkedin"></i> <i className="bi bi-whatsapp"></i>
          </h6>
        </div>

        <div className='div2 d-flex flex-column align-items-start p-4'>
          <h4 style={{ color: 'white', marginTop: '20px' }}>Navigation</h4> {/* ⬅️ marginTop adjusted */}
          <h6 style={{ color: 'grey', marginTop: '10px' }}>Home</h6>
          <h6 style={{ color: 'grey' }}>About</h6>
          <h6 style={{ color: 'grey' }}>Blog</h6>
          <h6 style={{ color: 'grey' }}>Services</h6>
          <h6 style={{ color: 'grey' }}>Contact</h6>
        </div>

        <div className='div3 d-flex flex-column align-items-start p-4'>
          <h4 style={{ color: 'white', marginTop: '20px' }}>Services</h4>
          <h6 style={{ color: 'grey', marginTop: '10px' }}>Blackforest</h6>
          <h6 style={{ color: 'grey' }}>Bodhubon</h6>
          <h6 style={{ color: 'grey' }}>Rongdhonu</h6>
          <h6 style={{ color: 'grey' }}>Meghrong</h6>
        </div>

        <div className='div4 d-flex flex-column align-items-start p-4'>
          <h4 style={{ color: 'white', marginTop: '20px' }}>Contact Us</h4>
          <h6 style={{ color: 'grey', marginTop: '10px' }}>76/A, Green Lane, Dhanmondi, NYC </h6>
          <h6 style={{ color: 'grey' }}>demomail89@gmail.com</h6>
          <h5 style={{ color: 'yellow' }}>+10 (78) 738-9083</h5>
        </div>
      </div>

      <div style={{ backgroundColor: '#05155dff', textAlign: 'center', padding: '10px' }}>
        <h6 style={{ color: "white", margin: '0' }}>
          Copyright ©2025 All rights reserved | This template is made with <i className="bi bi-balloon-heart-fill"></i> by Colorlib
        </h6>
      </div>
    </>
  )
}

export default Mainbodyseven;
