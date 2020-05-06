import React, { Component } from 'react';
import MuiThemeProvider, { theme } from "material-ui/styles/MuiThemeProvider";
import TextField, {  } from "material-ui/TextField";
import GoogleLogin from 'react-google-login';
import { RaisedButton } from 'material-ui';
import '../App.css';
 class FirstStep extends Component {
     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     
 
    render() {
        const {values} = this.props;
        return (
           <React.Fragment>
               <br></br>
               <div className="styldiv">
                  <h4   className="h4"> Information de base</h4>
                    <div style={divS}>
                    <TextField errorText="" style={styles} floatingLabelFixed="CIN" floatingLabelText="CIN" defaultValue={values.cin} onChange={this.props.handleChange('cin')}  name="cin"></TextField>

                    <TextField style={styles} floatingLabelFixed="massar" floatingLabelText="massar" defaultValue={values.massar} onChange={this.props.handleChange('massar')}  name='massar'></TextField>
                    <br></br>
                    <TextField style={styles} floatingLabelFixed="Email" floatingLabelText="Email" defaultValue={values.email} onChange={this.props.handleChange('email')} name="email"></TextField>

                    <TextField style={styles}  floatingLabelFixed="Email Confirmation" floatingLabelText="Email Confirmation" defaultValue={values.email} ></TextField>

                    <br></br>
              

                         <TextField type="password" style={styles}  floatingLabelFixed="entrer mot de passe" floatingLabelText="entrer mot de passe"   defaultValue={values.password} onChange={this.props.handleChange('password')} ></TextField>
     
                         <TextField  type="password" style={styles} floatingLabelFixed="Confirmer mot de passe" floatingLabelText="Confirmer mot de passe" ></TextField>
                    </div>
                  
                    <br></br>
               
                    <br></br>
                    <br></br>
                    </div>
                  
                    <br></br>
                    <br></br>
                    <br></br>
          
                    <br></br>

                    
                    </React.Fragment>
         
        )
    }
}
const styles={
    marginLeft:'50px',


}
const divS={
    padding:'auto',
    margin:'30px'
}
export default FirstStep;