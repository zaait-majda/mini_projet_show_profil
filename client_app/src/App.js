import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Connexion  from "./components/Connexion";
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';
import RegistrationForm  from "./components/RegistrationForm";
import StudentDashboard from "./components/StudentDashboard";
import etudiantDash from "./components/etudiantDash";
import Logout from './components/Logout';
function App() {
  return (

  
    <div className="App">

    <Router>
      
    <Switch>
     
      <Route exact path="/inscription" render={()=>(
             <div className="StepForm">
           
               <RegistrationForm></RegistrationForm>
           </div>
        
        )}>

      </Route>
      <Route path="/" component={Connexion}></Route>
     
      <Route path="/dash" component={StudentDashboard}></Route>
 
   
    </Switch>
    <Switch>
    <Route path="/etudiantDash" component={etudiantDash}></Route>
     

    </Switch>
    <Switch>
   
      <Route path= "/logout" component={Logout} ></Route>

    </Switch>
    <Switch>
   
    <Route path="/connexion" component={Connexion}></Route>

    </Switch>
    </Router>

    
    </div>


    
  );
}


export default App;
