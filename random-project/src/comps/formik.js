import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import "../styles/signup.css"
import axios from 'axios';
const initialValues={
    name:"nn",
    email:"",
    pwd:"",
    pwd1:"",
    num:""
}
const validate=(values)=>{
    let errors={};
    if(!values.name){
      errors.name='required'
    }
    if(!values.pwd){
      errors.pwd='required'
    }
    else{
      let pwdPattern=/(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/
      if(!pwdPattern.test(values.pwd)){
        errors.pwd="Invalid password format"
      }
    }

    if(!values.email){
      errors.email='required'
    }else{
      let emailPattern=/[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/
      if(!emailPattern.test(values.email)){
        errors.email="Invalid Email Format"
      }
    }

    if(!values.pwd1){
      errors.pwd1='required'
    } else{
      let pwd1Pattern=/(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/
      if(!pwd1Pattern.test(values.pwd1)){
        errors.pwd="Invalid password format"
      }
    }
    if(!values.num){
      errors.num='required'
    }else{
      var numPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/  ;
      if(!numPattern.test(values.num)){
        errors.num="Invalid number format"

      }
    }
return errors;
}

const onSubmit=(values)=>{
  axios.post("http://localhost:5000/signup",values).then(()=>{
    console.log("detailes created");
  }).catch((err)=>{
    console.log(err);
  })
  alert ("you have been registered successfully");
}
function Formiks() {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}> 
        <section className="section">
  <div id="signup">
      
    <Form className="signup-form" >

      <h1 className="signup-heading">Sign Up</h1>
      <p className="signup-copy">Welcome Folks, to the Jaipur's best Electronic market place</p>
      <br />
      <span>Name </span>
      <div className="field -username">
          <Field  type="text" placeholder="Type Your Name"   name="name" />
      </div>
      <br />
      <ErrorMessage name="name" />
      <br/><br/>

      <span>E-mail </span>
      <div className="field -username">
          <Field  type="email" placeholder="Type Your E-mail"  name="email" />
          <br/>
      </div>
      <br />    
        <ErrorMessage name="email" />

       <br/><br/>

      <span>Password </span>
      <div className="field -password">
        <Field  placeholder="Type Your password"  type="password"  name="pwd"/>
      </div>
      <br />
      <ErrorMessage name="pwd" />

      <br/><br/>

      <span>Confirm Password </span>
      <div className="field -password">
        <Field placeholder="Re-type Your password" type="password"   name="pwd1"   />
      </div> 
      <br />
      <ErrorMessage name="pwd1" />

      <br /><br />

      <span>Phone Number </span>
      <div className="field -username">
          <Field type="number"  placeholder="Type Your Phone Number"   name="num" />
        </div>
        <br />
        <ErrorMessage name="num" />
  <br/>
      <button className="signup-button"  type="submit">Signup</button>
    </Form>
  </div>
</section>
</Formik>
    )
}

export default Formiks
