import React,{useState} from 'react'
import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
import '../styles/signup.css'

function SignupComponent(props) {
   const [userDetails, setDetails] = useState({name:"",email:"",password:"",password1:"",number:+91});
   const [errors,setErrors]=useState({nameError:"",emailerror:"",passError:"",passw1Error:"",numError:""})
  //  const {props}=this.props;
  // const submitHandler=(e)=>{ 
  
  // }
  const validate =()=>{
    let passwordPattern=/(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/;
            if(! passwordPattern.test(userDetails.password)){
              let passwordError="password is incorrect";
              setErrors({...errors, passError:passwordError})
              return false;
            }
            return true;
  }
    return (
        
  <section className="section">
  <div id="signup">
      
    <form className="signup-form" onSubmit={(e)=>{
      const invalid=validate()
      if(invalid){
        console.log("hi error display works",userDetails); 
      }
        e.preventDefault();

        console.log(userDetails.name,userDetails.email);
        // props.changeWord(userDetails.name);

        if(userDetails.name===" "||userDetails.name===""||userDetails.email===" "||userDetails.email===""||userDetails.password===" "||userDetails.password===""||
        userDetails.password1===" "||userDetails.password1===""||userDetails.number===" "||userDetails.number===""){
          alert("Please Enter all the credentials")
        }else{
          let emailPattern=/[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/;
          if(!emailPattern.test(userDetails.email)){
            alert("Please enter proper email")
        
          }else{
            
              let confirmpasswordPattern=/(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/
              if(!confirmpasswordPattern.test(userDetails.password1))
              {
                alert("Please enter proper password")
              }
              else{
                var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/  
                if(!mobPattern.test(userDetails.number)){
                alert("Please enter number properly")

                }else{
                  if(userDetails.password!==userDetails.password1){
                    alert("Password didn't matched")
                  }else{
                    axios.post("http://localhost:5000/signup",userDetails).then(()=>{
                      console.log("detailes created");
                    }).catch((err)=>{
                      console.log(err);
                    })
                    alert ("you have been registered successfully");
                  }

           
              }
            }
          
          }   
      }
    }}>

      <h1 className="signup-heading">Sign Up</h1>
      <p className="signup-copy">Welcome Folks, to the Jaipur's best Electronic market place</p>
      <br />
      <span>Name </span>
      <div className="field -username">
          <input  type="text" placeholder="Type Your Name" value={userDetails.name} onChange={
            (e)=>{
              setDetails({...userDetails,name: e.target.value})

              if(e.target.value===""||e.target.value===" "){
                <span> please enter the name greater than length 3</span>
              }
            }} 
            name="demo" />
      </div>

      <br/><br/>

      <span>E-mail </span>
      <div className="field -username">
          <input  type="email" placeholder="Type Your E-mail" value={userDetails.email} onChange={(e)=>{setDetails({...userDetails,email:e.target.value})}} name="demo" />
          <br/>
      </div>
       <br/><br/>

      <span>Password </span>
      <div className="field -password">
        <input  placeholder="Type Your password" value={userDetails.password} onChange={(e)=>{setDetails({...userDetails,password:e.target.value})}} type="password" name="demo"/>
      </div>
      <br />
      <div>{errors.passError}</div>

      <br/><br/>

      <span>Confirm Password </span>
      <div className="field -password">
        <input placeholder="Re-type Your password" value={userDetails.password1} onChange={(e)=>{setDetails({...userDetails, password1: e.target.value})}} type="password" name="password1"   />
      </div> 

      <br /><br />

      <span>Phone Number </span>
      <div className="field -username">
          <input type="number"  placeholder="Type Your Phone Number" value={userDetails.number} onChange={(e)=>{setDetails({...userDetails,number:e.target.value})}} name="demo" />
        </div>
      <br/>
      <button className="signup-button"  type="submit">Signup</button>
    </form>
  </div>
</section>
    )
}

export default SignupComponent
