import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Connexion  from "./components/Connexion";
import {BrowserRouter as Router,Route,Switch }from 'react-router-dom';
import RegistrationForm  from "./components/RegistrationForm";
import StudentDashboard from "./components/StudentDashboard";

import Logout from './components/Logout';
import EspaceSudent from './components/EspaceSudent';

import profil from './components/profil';
import school from './components/school';
import choix from './components/choix';
import  reinscriptionForm  from './components/reinscriptionForm';
 
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
   
      <Route path= "/logout" component={Logout} ></Route>

    </Switch>
    <Switch>
   
    <Route path="/connexion" component={Connexion}></Route>

    </Switch>
    <Switch>
   
   <Route path="/EspaceSudent" component={EspaceSudent}></Route>

   </Switch>
   <Switch>
   
   <Route path="/profil" component={profil}></Route>

   </Switch>
   <Switch>
   
   <Route path="/school" component={school}></Route>

   </Switch>
   <Switch>
   
   <Route path="/choix" component={choix}></Route>

   </Switch>


   <Switch>
   
   <Route path="/reinscriptionForm" component={reinscriptionForm}></Route>

   </Switch>

    </Router>

   
    </div>


    
  );
}


export default App;
