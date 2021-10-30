import React,{useState} from 'react'
import SignupComponent from './SignupComponent'

function AccountComponent() {
  const [data,setData]=useState({})
    return (
        <div>
            <h1>{data}</h1>
            {/* <SignupComponent changeWord={data=>setData(data)}></SignupComponent> */}
        <SignupComponent changeWord={ (data) =>setData(data)}></SignupComponent> 
    
       
        </div>
    )
}

export default AccountComponent
