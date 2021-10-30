import React from 'react';
import {useHistory} from 'react-router-dom';
import { Formik, Form, ErrorMessage, Field } from "formik";
import { Link,useRouteMatch,Switch,Route } from 'react-router-dom';
// import SignupComponent from './SignupComponent';
import axios from 'axios';
import '../styles/login.css';

var history;

const initialValues={  email:"",password:""}

const validate=(values)=>{
  let errors={};
  if(!values.email){ errors.name="required";  }else{
    let emailPattern = /[A-Za-z._0-9]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/;
    if (!emailPattern.test(values.email)) {
      errors.email = "Invalid Email Format";
    }
  }

  if(!values.password){
    errors.password="required"
  }else{
    let passwordPattern =  /(?=^.{8,20}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;.])(?!.*\s).*$/;
    if (!passwordPattern.test(values.password)) {
       errors.password = "Invalid password format";
    }
  }
  return errors;
}

const onSubmit=(values)=>{
  console.log(values);
  axios.post("http://localhost:5000/login",values).then((result)=>{
    console.log(result.data.token);
    localStorage.setItem("logintoken",result.data.token)
    history.push("/");
    window.location.reload(false);
  }).catch((err)=>{
  console.log(err.response.data.msg);
    alert(err.response.data.msg)
  })
}
function LoginComponent() {
  history=useHistory();
    const {path}=useRouteMatch();

    return (
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
 <section className="section">
    <div className="login">
      <Form className="login-form">
        <h1 className="login-heading">Sign in</h1>
        <p>Welcome back, to the best electronic marketplace</p>
        <br/>
        <span>E-mail </span>
        <div className="field -username">
            <Field type="email"   placeholder="Type Your  E-mail" name="email" />
             <br/>
        </div>
        <ErrorMessage name="email" />
        <br/><br/>

        <span>Password </span>
        <div className="field -password">
            <Field placeholder="Type Your password"   type="password" name="password"  />
            <br/>
          </div>
          <ErrorMessage name="password" />
        <br/> <br/>
        <button className="log-in-button" value="login" type="submit">Sign in</button>
        <br/><br/>
        <br /><br/>
        <p    >don't have account</p> <span><Link  id="signup"  to={`/signupform`} className="create-account-link">signup</Link>
         </span>
      </Form>
        <Switch>
               <Route exact path={path}>
               {/* <SignupComponent></SignupComponent> */}
              </Route>
          </Switch>
    </div>
    
  </section>
      </Formik>
       
    )
}

export default LoginComponent
