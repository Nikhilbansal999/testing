import React from 'react'
import { Link } from 'react-router-dom'

 import '../styles/footer.css'

function FooterComponent() {
    return (
        
<footer className="sec6">
  <img src="assets\images\picture30.JPG" alt="" className="picture30" />
  <div className="text4">
      <img src="assets\images\picture31.JPG" alt="" className="picture31"/>
      <div className="it">
          <p>Mobster, 16 A kundan Nagar jaipur Rajasthan &nbsp; </p>
      </div>

      <div className="text5">
          <img src="assets\images\picture35.JPG" alt="" className="picture35" />
          <div className="it">
              <p>8619074467</p>
          </div>
      </div>
 <div className="text6">
  <img src="assets\images\picture36.JPG" alt="" className="picture36" />
  <div className="it">
 <p> nikhil.saroj.bansal@gmail.com</p>
  </div>
 </div>
</div>
<br/>
<hr></hr>

<br/><br/>
<div className="lists">

<div className="l1">
  <span>Products</span>
  <ul className="links">
      <li><Link to={`/signup`}>Laptop</Link></li>
      <li><Link to={`/signup`}>Mobiles</Link></li>
      <li><Link to={`/signup`}>Television</Link></li>

  </ul>
</div>
<div className="l1">
  <span>Products</span>
  <ul className="links">
      <li><Link to={`/signup`}>Accessories</Link></li>
      <li><Link to={`/signup`}>Drones</Link></li>
      <li><Link to={`/signup`}>Camera</Link></li>

  </ul>
</div>
<div className="l1">
  <span>More</span>
  <ul className="links">
      <li><Link to={`/signup`} >want to work?</Link></li>
      <li><Link to={`/signup`}>Any questions</Link></li>
      <li><Link to={`/signup`} >About</Link></li>
  </ul>
</div>
<div className="l1">
  <span>Connect Us</span>
  <ul className="links">
      <li><Link to={`/signup`}>Facebook</Link></li>
      <li><Link to={`/signup`} >Instagram</Link></li>
      <li><Link to={`/signup`}>Twitter</Link></li>
      <li><Link to={`/signup`}>Youtube</Link></li>
  </ul>
</div>

</div>
</footer>

    )
}

export default FooterComponent
