import React from 'react'

function Final() {
  return (
    <main>
        <div style={{height:"900px", backgroundColor:"#cccccc", paddingTop:"50px"}}>

        <div style={{  paddingTop:"500px",paddingTop:"10px", paddingLeft:"30px"}}>
            <h4>Inspiration for future getway</h4>
        </div>
        <div style={{display:"flex", gap:"20px", paddingLeft:"30px"}}>
            <span>Popular</span>
        <span>Historic</span>
        <span>Cosastal</span>
        <span>Islands</span>
        <span>Lakes</span>
        <span>Unique stays</span>
        <span>Categories</span>
        <span>Things to do</span>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:"50px", paddingLeft:"30px", paddingTop:"50px"}}>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />Flat rentals</div>
          <div><strong>Aberfeldy</strong><br />holiday rentals</div>
          <div><strong>Aberfeldy</strong><br />cottage rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />Flat rentals</div>
          <div><strong>Aberfeldy</strong><br />Cottage rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />Flat rentals</div>
          <div><strong>Aberfeldy</strong><br />Flat rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />Cottage rentals</div>
          <div><strong>Aberfeldy</strong><br />Cottage rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />villa rentals</div>
          <div><strong>Aberfeldy</strong><br />Flat rentals</div>
        </div>

        <div style={{display:"flex" , paddingTop:"150px", gap:"280px", paddingLeft:"30px"}}>
            <div><strong style={{gap:"50px"}}>support</strong> <br /><br />Help center <br /> <br />AirCover <br /> <br />Anti-discrimination  <br /><br />Disability suppport <br /> <br />Cancellation options <br /> <br />Report neighbourhood concern</div>
            <div style={{textAlign:"center", gap:"50px"}}><strong>Hosting</strong> <br /><br />Airbnb your home <br /> <br />AirCover for hostes <br /><br />Hosting resources <br /><br />Community forum <br /><br />Hosting responsible</div>
            <div><strong  style={{textAlign:"end", gap:"30px"}}>Airbnd</strong><br /><br />Newsroom <br /><br />new features <br /> <br />Careers <br /><br />Investors <br /><br />Gift cards <br /><br />Airbinbl.org emergency stays</div>

        </div>
        </div>
    </main>
  )
}

export default Final