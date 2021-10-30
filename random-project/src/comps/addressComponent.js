import React from 'react'
import '../styles/address.css'
function addressComponent() {
    return (
        
  <section class="section">
  <div id="address">
      
    <form class="signup-form">

      <h1 class="signup-heading">Address</h1>
     
      <span>Name </span>
      <div class="field -username">
          <input  type="text" placeholder="Type Your Name"   />
      </div>

      <br/><br/>

      <span>Address </span>
      <div class="field -username">
          <input  type="text" placeholder="Type Your Address"   />
      </div>

       <br/><br/>

      <span>City </span>
      <div class="field -password">
        <input  placeholder="Type Your password"  />
      </div>

      <br/><br/>

      <span>state</span>
      <div class="field -password">
        <input placeholder="Type your state"  type="text"/>
      </div>

      <br/><br/>

      <span>Pincode </span>
      <div class="field -username">
          <input type="number"  placeholder="Type Your Pincoder" />
      </div>
      <br/>
      <button class="signup-button"  type="submit">Place your order order</button>
    </form>
  </div>
</section>
    )
}

export default addressComponent
