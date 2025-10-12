import React from 'react'
import Image from 'react-bootstrap/Image';
import video from '../assets/video-bg.png';


function Mainbodysectionsix() {
  return (
    <>
    <div style={{marginTop:'80px',textAlign:'center',position:'relative'}}>
        
        
        
        <Image src={video}fluid />
    <div className='pq' style={{position:'absolute',top:'2%',left:'50%',transform:"translate(-50%, 50%)",color:"white"}}>
        <h1 style={{ cursor: 'pointer' }} onClick={() => window.open("https://www.youtube.com/watch?v=qrBGk07iSLY", "_blank")}><i class="bi bi-play-circle-fill"></i></h1>
        <h1>Watch Our Latest Tour</h1>
        </div>
    </div>
      </>  
  )
}
export default Mainbodysectionsix