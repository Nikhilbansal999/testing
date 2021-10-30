import './App.css';
import Navigation from './comps/headerComponent';
import { Route,BrowserRouter as Router,Switch,Redirect } from 'react-router-dom';
import HomeComponent from './comps/HomeComponent';
import MyordersComponent from './comps/MyordersComponent';
import LoginComponent from './comps/LoginComponent';
import CartComponent from './comps/cartComponent';
import AccountComponent from './comps/AccountComponent';
import SellComponent from './comps/SellComponent';
import PageNotFoundComponent from './comps/PageNotFoundComponent';
import FooterComponent from './comps/FooterComponent';
import signupForm from './comps/signupForm';
import SignupForm from './comps/signupForm';
function App() {
  let isLogged= localStorage.getItem("logintoken")
  let isSignup=localStorage.getItem("token");
  return (
    <div className="App">
     <Router>
     <Navigation></Navigation>
     <Switch> 
     {/* <Route exact path='/address' component={addressComponent}></Route> */
     /* switch is used in case if the match is found but it will continue to search for route and redirect us to error page to stop searching for path after the path is found we use switch */}
     <Route exact path="/" refresh="true" component={HomeComponent}></Route>
     <Route exact path="/account"  component={AccountComponent}></Route>  
     <Route exact path="/login" component={LoginComponent}></Route>
     <Route exact path="/orders" component={ MyordersComponent }> { !isLogged ?<Redirect from="/" to="/login" /> : <MyordersComponent />}     </Route>
<Route exact path="/cart" component={CartComponent} >
  {!isLogged?<Redirect from="/" to="/login"/>:<CartComponent/>}
  </Route>
     <Route exact path="/signupForm" component={signupForm}>     
      {isSignup? <Redirect  to="/" /> :<SignupForm /> }    
      </Route>
     <Route exact path="/sell"  component={ SellComponent }> 
          { !isLogged ?<Redirect from="/" to="/login" /> : <SellComponent />}      
           </Route>    
     <Route  component={ PageNotFoundComponent }></Route>
</Switch>
<FooterComponent></FooterComponent>
     </Router>
    </div>
  )}
export default App;