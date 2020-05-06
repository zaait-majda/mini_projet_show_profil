import React, { Component } from 'react';
import MuiThemeProvider, { theme } from "material-ui/styles/MuiThemeProvider";
import TextField, {  } from "material-ui/TextField";
import NativeSelect from '@material-ui/core/NativeSelect';
import { RaisedButton } from 'material-ui';
 class SecondeStep extends Component {

     continue=e=>{
         e.preventDefault();
         this.props.nextStep();
     }
     back=e=>{
        e.preventDefault();
        this.props.prevStep();
     }
     
     
    render() {
        const {values} = this.props;
        return (
           
                <React.Fragment>
                    <br></br>
                    
               <div className="styldiv">
                  <h4  className="h4"> Information personnel</h4>
                   <div style={divS}>
                    <TextField style={styles} floatingLabelFixed="Nom" floatingLabelText="Nom" defaultValue={values.lastname_fr} onChange={this.props.handleChange('lastname_fr')}  name="lastname_fr"></TextField>
                    <TextField style={styles} floatingLabelFixed="Prenom" floatingLabelText="Prenom" defaultValue={values.firstname_fr} onChange={this.props.handleChange('firstname_fr')}  name="firstname_fr"></TextField><br></br>
                    
                    <TextField style={styles} floatingLabelFixed=" الاسم العاىلي" floatingLabelText="الاسم العاىلي" defaultValue={values.lastname_ar} onChange={this.props.handleChange('lastname_ar')}  name="lastname_ar"></TextField>

                    <TextField style={styles} floatingLabelFixed="الاسم الشخصي" floatingLabelText="الاسم الشخصي" defaultValue={values.firstname_ar} onChange={this.props.handleChange('firstname_ar')} name="firstname_ar"></TextField><br></br>
                   
                    <TextField type="date" style={styles} floatingLabelFixed="Date Naissance" floatingLabelText="Date Naissance" defaultValue={values.date_Naissance} onChange={this.props.handleChange('date_Naissance')}></TextField>

                    <TextField style={styles}  floatingLabelFixed="Lieu Naissance" floatingLabelText="Lieu Naissance" defaultValue={values.lieu_Naissance}></TextField>
                    
                    <br></br>
                    <NativeSelect style={styles}   defaultValue={values.nationalite} onChange={this.props.handleChange('nationalite')}>
                         <option value="">Nationalite</option>
                        <option value="marocain">Marocain</option>
                        <option value="etrange">Etrange</option>
                    </NativeSelect>

                    <TextField style={styles} floatingLabelFixed="Telephone" placeholder="+212" floatingLabelText="Telephone" defaultValue={values.telephone} onChange={this.props.handleChange('telephone')}></TextField><br></br>

                    <TextField style={styles} floatingLabelFixed="Adresse" floatingLabelText="Adresse"  defaultValue={values.address} onChange={this.props.handleChange('address')}></TextField>
 
                    </div>
                    
                    </div>

                </React.Fragment>
         
        )
    }
}
const styles={
    marginLeft:'50px',
    width:'250px',
   
}
const divS={
    padding:'auto',
    margin:'30px'
}

export default SecondeStep;