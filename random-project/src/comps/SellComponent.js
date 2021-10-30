import React from 'react';
import { Formik, Form, ErrorMessage, Field } from "formik";
import '../styles/asell.css'
function SellComponent(props) {

  const initialValues={  name:"",price:"",category:"",image:""}

  const validate=(values)=>{
    let errors={};
    if(!values.name){ errors.name="required";  }
    
  
    if(!values.price){
      errors.price="required"
    }
    if(!values.category){
      errors.category="required"
    }
    if(!values.image){
      errors.category="required"
    }
    return errors;
  }
  
  const onSubmit=(values)=>{
    console.log(values);
   
  }
 
    return (
       <Formik onSubmit={onSubmit} validate={validate} initialValues={initialValues}>
   <section className="section">
      <br />

      <h1 className="signup-heading">Sell Your product</h1>
<br />
         <div id="signup">
         <img alt="" className="img"/> 
        <Form className="signup-form">
        
       {/* <Field type="file" accept="image/png image/jpeg image/jpg"/> */}
       <div className="field -username">
              <Field  type="file" accept="image/png image/jpeg image/jpg" placeholder="Product Name" name="image" />
              <br/>
           </div>
          <br /><br />
          <span>Product Name </span>
          <div className="field -username">
              <Field  type="text" placeholder="Product Name" name="name" />
              <br/>
           </div>
           <ErrorMessage name="name" />
  
          <br/><br/>
  
          <span>Price </span>
          <div className="field -username">
              <Field  type="number" placeholder="Price"  name="price" />
              <br/>
          </div>
        <ErrorMessage name="price" />

           <br/><br/>
  
          <span>Category </span>
          <div className="field -password">
            <Field  placeholder="Category"    type="text" name="category"/>
            <br />
          </div>
          <ErrorMessage name="category" />
 
          <br/><br/>
          <button className="signup-button" type="submit">Sell</button>
        </Form>
      </div>
    </section>
       </Formik>
         
   
    )
}

export default SellComponent
