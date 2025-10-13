import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import about2 from '../assets/about2.png'
function Mainbodysectionfive() {
  return (
    <div style={{marginTop:"200px",textAlign:"center"}}>
        <div className='av'>
            <h5 style={{color:'blue'}}>FAQ</h5>
            <h1 style={{color: "#05155dff"}}>Full range of travel services</h1>
        </div>
        <div className="xy d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mt-5">
                <div>
                     <Card style={{border:"none",marginTop:'100px'}}>
                        <Card.Body className='d-flex flex-column '>
                            <h6 style={{color:'#05155dff',fontSize:'20px',marginBottom:"20px"}}><span style={{color:'blue'}}>+</span>Starts the automated process</h6>
                            <h6 style={{color:'#05155dff',fontSize:'20px',marginBottom:"20px"}}><span style={{color:'blue'}}>+</span>The automated process starts</h6>
                            <h6 style={{color:'#05155dff',fontSize:'20px',marginBottom:"20px"}}><span style={{color:'blue'}}>+</span> Automated process starts</h6>
                            <h6 style={{color:'#05155dff',fontSize:'20px',marginBottom:"20px"}}><span style={{color:'blue'}}>+</span>Process the automated magic</h6>
                        </Card.Body>
                    </Card>
                </div>
                <div style={{marginTop:'100px'}}>
                     <Image src={about2}fluid />
                </div>
        </div>
                <button className="custom-btn2 animate__animated animate__bounceIn"style={{ animationDelay: "1s",color: "##05155dff",width:'200px',marginLeft:'15px ',marginTop:'50px' }}>Book Your Tickets</button>

    </div>
  )
}

export default Mainbodysectionfive