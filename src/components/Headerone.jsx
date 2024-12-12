import React from 'react'
import airbnblogo from '../assets/airbnblogo.png'
import icon from '../assets/icon.png'
import man from '../assets/man.png'
import god from '../assets/god.png'
import cup from '../assets/cup.png'
import boy   from '../assets/nap.png'
import star from '../assets/star.png'
import isu from '../assets/isu.png'
import good from '../assets/good.png'
import bad from '../assets/bad.png'
import guy from '../assets/guy.png'

function Headerone() {
  return (
    <main>

      <div>
        <img src={airbnblogo} alt="" /> 

        
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>      

        <nav style={{display:"flex", height:"50px", color:"black",justifyContent:"center",border:"1px,solid black",gap:"50px", borderRadius:"20px", width:"600px"}}>
          <ol>
          Any where
          </ol>
          <ol>
          Any week
          </ol>
          <ol>
          Add guest  <img src={bad} alt="" />
          </ol>
          
        </nav>
        </div>
      <div style={{
        display:"flex",
        justifyContent:"end"
      }}>
        <span>Airbnb your home</span>
        <img src={man} alt="" />
      </div>
        



      <div style={{display:"flex", gap:"50px", paddingTop:"50px",paddingLeft:"30px"}}>


    <div><img src={guy} alt="" /><br />Amazing view</div>
        <div><img src={star} alt="" /><br />Cabins</div>
        <div><img src={bad} alt="" /><br />Beachfront</div>
      <div>
     

        <img src={god} alt="" /><br />Skiing
      </div>
    <div>
      <img src={cup} alt="" /> <br />Grand pianos
    </div>
    <div>
      <img src={guy} alt="" /> <br />Manion
    </div>
  
    <div><img src={isu} alt="" /> <br />OMG!</div>
    <div><img src={boy} alt="" /><br />Amazing pool</div>
    <div> <img src={good} alt="" /><br /> Luxe</div>
    <div> <img src={bad} alt="" /> <br />Boats</div>
    <div><img src={man} alt="" /><br />lakefront</div>
    <div><img src={star} alt="" /><br />Treehouses</div>
      </div>


    
      
     
    </main>
  )
}

export default Headerone