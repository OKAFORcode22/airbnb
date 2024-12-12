import React from 'react';
import mad from '../assets/mad.png'; 
import can from '../assets/can.png'; 
import card from '../assets/card.png'; 
import ban from '../assets/ban.png'; 
import loop from '../assets/loop.png'; 
import moon from '../assets/moon.png';
import that from '../assets/that.png';
import coo from '../assets/coo.png';
import yoo from '../assets/yoo.png';
import fool from '../assets/fool.png';
import ppp from '../assets/ppp.png';
import dan from '../assets/dan.png';  
import goo from '../assets/goo.png';
import gate from '../assets/gate.png';
function Headertwo() {
  return (
    <main>
      <div style={{hoverbackgroundColor :"red",hover:"red", paddingTop: "50px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
        <div style={{}}><img src={mad} alt="Mad image" /></div>
        <div><img src={card} alt="Card image" /></div>
        <div><img src={ban} alt="Ban image" /></div>
        <div><img src={can} alt="Can image" /></div>
        <div><img src={loop} alt="Loop image" /></div>
        <div><img src={moon} alt="Moon image" /></div>
        <div><img src={that} alt="" /></div>
        <div><img src={coo} alt="" /></div>
        <div><img src={yoo} alt="" /></div>
        <div><img src={fool} alt="" /></div>
        <div><img src={ppp} alt="" /></div>
        <div><img src={dan} alt="" /></div>
        <div><img src={goo} alt="" /></div>
        <div><img src={gate} alt="" /></div>
        <div><img src={moon} alt="" /></div>
        <div><img src={coo

        } alt="Moon image" /></div>
      </div>

      <div style={{textAlign:"center", paddingTop:"40px",}}><strong>continue exploring amazing views</strong></div>

      <div style={{ height:"50px", textAlign:"center",paddingTop:"20px" ,}}><strong style={{ height:"7000px", backgroundColor:"black",borderRadius:"50px", color:"white", width:"60px"}}>show more</strong></div>
    </main>
  );
}

export default Headertwo;