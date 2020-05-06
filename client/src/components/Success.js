import React, { Component } from 'react'
import '../App.css';
import { RaisedButton } from 'material-ui';
export default class Success extends Component {
    render() {
        return (
            <div className="SuccessDiv">
            <p>Votre inscription est prise en charge </p>
            <br></br>
           
            <p></p>
            <RaisedButton>Imprimer</RaisedButton>
            </div>
        )
    }
}
