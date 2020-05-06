import React, { Component } from 'react';
import TextField, {  } from "material-ui/TextField";
import NativeSelect from '@material-ui/core/NativeSelect';
import { RaisedButton } from 'material-ui';
export default class ThirdStep extends Component {
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
                  <h4  className="h4"> Information des parents</h4>
                  <div style={divS}>
                   <TextField style={styles} floatingLabelFixed="Nom complet du pére" floatingLabelText="Nom complet du pére" defaultValue={values.nom_Prenom_Pere} onChange={this.props.handleChange('nom_Prenom_Pere')}></TextField>
                   
                   <NativeSelect style={styles} floatingLabelFixed="Profession du pére" floatingLabelText="Profession du pére" defaultValue={values.profession_Pere} onChange={this.props.handleChange('profession_Pere')}>
                        <option value="">Profession du pére</option>
                        <option value="directeur">Directeur</option>
                        <option value="autre">Autre</option>
                   </NativeSelect>
                   <br></br>
                   <TextField style={styles} floatingLabelFixed=" Nom complet du mére" floatingLabelText="Nom complet du mére" defaultValue={values.nom_Prenom_mere} onChange={this.props.handleChange('nom_Prenom_mere')}></TextField>

                 
                   <NativeSelect style={styles}  defaultValue={values.profession_mere} onChange={this.props.handleChange('profession_mere')}>
                   <option value="">Profession du mére</option>
                   <option value="directrice">Directrice</option>
                   <option value="autre">Autre</option>
                   </NativeSelect>
                   
                   <br></br>
                   <TextField style={stylesPar} floatingLabelFixed="Adresse" placeholder="Residence,quartier, ville,pays" floatingLabelText="Adresse" ></TextField><br></br>

                   <TextField style={stylesPar} floatingLabelFixed="Telephone" placeholder="+212" floatingLabelText="Telephone"></TextField><br></br>

                   
                   </div>
                   
                   <br></br>
                   <br></br>
                   </div>


                    <br></br>
          
                    <br></br>
                    
               </React.Fragment>
        
       )
   }
}
const stylesPar={
    width:'350px'
}
const styles={
   marginLeft:'50px',
   width:'250px',
  
}
const divS={
   padding:'auto',
   margin:'30px'
}

