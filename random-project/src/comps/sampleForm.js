import React from 'react';
import {useFormik} from 'formik';
import "../styles/signup.css"
// import * as Yup from 'yup';


// const validationSchema=Yup.object({
//   name:Yup.string().required('required'),
//   email:Yup.string().email("Invalid Email Format").required("required"),
  // pwd:Yup.string().pwd("invalid password format").required()
  // num:Yup.string().num("invalid phone fformat").required("required")
// })

function SampleForm() {
    const formik=useFormik({
        initialValues:{
            name:"nn",
            email:"",
            pwd:"",
            pwd1:"",
            num:""
        },
        // validationSchema,
        validate: values=>{
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
        },
        onSubmit: values =>{
          console.log(values);     
         
        }
    });

    // console.log(formik.errors);
    console.log(formik.touched);

    return (
        <section className="section">
  <div id="signup">
      
    <form className="signup-form" onSubmit={formik.handleSubmit} >

      <h1 className="signup-heading">Sign Up</h1>
      <p className="signup-copy">Welcome Folks, to the Jaipur's best Electronic market place</p>
      <br />
      <span>Name </span>
      <div className="field -username">
          <input  type="text" placeholder="Type Your Name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} name="name" />
      </div>
      <br />
      {formik.touched.name && formik.errors.name? <div className="error">{formik.errors.name}</div>:null}
      <br/><br/>

      <span>E-mail </span>
      <div className="field -username">
          <input  type="email" placeholder="Type Your E-mail" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} name="email" />
          <br/>
      </div>
      <br />
      {formik.touched.email && formik.errors.email? <div className="error">{formik.errors.email}</div>:null}

       <br/><br/>

      <span>Password </span>
      <div className="field -password">
        <input  placeholder="Type Your password"  type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.pwd} name="pwd"/>
      </div>
      <br />
      {formik.touched.pwd && formik.errors.pwd? <div className="error">{formik.errors.pwd}</div>:null}

      <br/><br/>

      <span>Confirm Password </span>
      <div className="field -password">
        <input placeholder="Re-type Your password" type="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.pwd1} name="pwd1"   />
      </div> 
      <br />
      {formik.touched.pwd1 && formik.errors.pwd1? <div className="error">{formik.errors.pwd1}</div>:null}

      <br /><br />

      <span>Phone Number </span>
      <div className="field -username">
          <input type="number"  placeholder="Type Your Phone Number" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.num}  name="num" />
        </div>
        <br />
      {formik.touched.num && formik.errors.num? <div className="error">{formik.errors.num}</div>:null}
      <br/>
      <button className="signup-button"  type="submit">Signup</button>
    </form>
  </div>
</section>
    )
}

export default SampleForm
