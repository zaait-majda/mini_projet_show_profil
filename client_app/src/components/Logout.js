import React ,{Component } from "react";
import {Route,Redirect} from "react-router-dom";
import Axios from "axios";

 class Logout extends Component{

    constructor(){
        super()
        // token remove
        localStorage.removeItem("token")
    }

   
    render(){
        
        return <Redirect to="/connexion" />
    }
}

export default  Logout;