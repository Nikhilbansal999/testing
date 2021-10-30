import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import axios from "axios";
import {useHistory} from 'react-router-dom'
const initialValues = {  name: "nn", email: "",  password: "",  password1: "",  number: "" };
var history;
const validate = (values) => {
  let errors = {};
  if (!values.name) {   errors.name = "required";  }

  if (!values.email) { errors.email = "required"; }
  else{
    let emailPattern = /[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/;
    if (!emailPattern.test(values.email)) {
      errors.email = "Invalid Email Format";
    }
  }

  if(!values.password) {  errors.password = "required";  }
  else{
    let passwordPattern =  /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/;
    if (!passwordPattern.test(values.password)) {
       errors.password = "Invalid password format";
    }
  }

  if(!values.password1) { errors.password1 = "required";} 
  else {
    if(values.password!==values.password1){
      errors.password="Password doesnt match"
    }else{    
    let password1Pattern =/(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/;
    if (!password1Pattern.test(values.password1)) {
      errors.password1= "Invalid password format";
    }
  }
}

  if (!values.number) { errors.number = "required";} 
 else {
    var numPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
    if (!numPattern.test(values.number)) {
      errors.number = "Invalid number format";
    }
}


  return errors;
};


const onSubmit = (values) => {

  console.log(values);
  axios.post("http://localhost:5000/signup", values).then((result) => {
    console.log(result.data.token)
    localStorage.setItem("token",result.data.token)
      console.log("Details created");
      alert("you have been registered successfully");
      history.push("/")
    }).catch((err) => { 
             console.log(err.response.data.msg);
             alert(err.response.data.msg)

    });  
};

function SignupForm() {
  history= useHistory();

  return (
    <Formik initialValues={initialValues}  validate={validate} onSubmit={onSubmit } >

      <section className="section">
        <div id="signup">
          <Form className="signup-form">
            <h1 className="signup-heading">Sign Up</h1>
            <p className="signup-copy"> Welcome Folks, to the Jaipur's best Electronic market place</p>
            <br />

            <span>Name </span>
            <div className="field -username">
              <Field type="text" placeholder="Type Your Name" name="name" />
            </div>
            <br />
            <ErrorMessage name="name" />
            <br /> <br />

            <span>E-mail </span>
            <div className="field -username">
              <Field type="email" placeholder="Type Your E-mail" name="email" />
              <br />
            </div>
            <br />
            <ErrorMessage name="email" />
            <br /><br />

            <span>Password </span>
            <div className="field -password">
              <Field placeholder="Type Your password" type="password" name="password"/>
            </div>
            <br />
            <ErrorMessage name="password" />
            <br /><br />

            <span>Confirm Password </span>
            <div className="field -password">
              <Field placeholder="Re-type Your password" type="password" name="password1"/>
            </div>
            <br />
            <ErrorMessage name="password1" />
            <br /><br />

            <span>Phone Number </span>
            <div className="field -username">
              <Field type="number" placeholder="Type Your Phone Number" name="number" />
            </div>
            <br />
            <ErrorMessage name="number" />
            <br />

            <button className="signup-button"  type="submit"> Signup</button>

          </Form>
        </div>
      </section>
    </Formik>
  );
}
export default SignupForm;