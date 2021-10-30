import React,{ useState,useEffect} from 'react'
import mobster from '../images/mobster.png';
import '../styles/myStlyles.css';
import {Link, NavLink} from 'react-router-dom';

function HeaderComponent() {
    const [logged]=useState(localStorage.getItem("logintoken"));
    const logout=()=>{
        localStorage.removeItem("logintoken");
        let min=document.getElementById("logout");
        let lin=document.getElementById("login");
        min.style.display="none";
        lin.style.display="inline-block";
                     }
    useEffect(()=>{

        // const logged=localStorage.getItem("logintoken");
        // window.location.reload(false);
            let lin=document.getElementById("login");
            let min=document.getElementById("logout");
            if(!logged){return min.style.display="none";
        }
            else{ return  lin.style.display="none"; }
            
        })  

return (
<header>
  <img src={mobster} alt="" className="logo" height="60px" width="200px" />
  <ul className="nav_link">
      <li> <Link to="/">Home</Link> </li>
      <li> <NavLink to="/sell" activeClassName="sell" >Sell</NavLink></li>
      <li><Link to="/orders">Orders</Link></li>
      <li><Link to="/account?email=this.state.email">Account</Link></li>
      <li>Admin</li>
  </ul>
  <ul className="nav_rightlink">
     <li><Link to="/cart">cart</Link></li>
     <li id="login"><NavLink exact activeClassName="login" to="/login" >Login/Signup</NavLink ></li>
     <li onClick={logout} id="logout"> <NavLink  exact to="/login">Logout</NavLink> </li>
  </ul>
</header>

    )
}
export default HeaderComponent