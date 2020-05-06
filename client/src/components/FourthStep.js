import React, { Component } from 'react';
import TextField, {  } from "material-ui/TextField";
import NativeSelect from '@material-ui/core/NativeSelect';
import { RaisedButton } from 'material-ui';
import InputLabel from '@material-ui/core/InputLabel';
export default class FourthStep extends Component {
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
                  <h4 className="h4">Information scolaires/universitaires</h4>
                  <div style={divS}>
                 
                  <NativeSelect style={styles} defaultValue={values.id_filiere} onChange={this.props.handleChange('id_filiere')}>
                        <option value="">Selectioner votre filiere</option>
                        <option value="1">GINFO</option>
                        <option value="2">GPMC</option>
                        <option value="3">GTR</option>
                   </NativeSelect>

                   <NativeSelect style={styles} defaultValue={values.niveau} onChange={this.props.handleChange('niveau')}>
                        <option value="">Selectionez Votre Niveau</option>
                        <option value="cp1">cp1</option>
                        <option value="cp2">cp2</option>
                        <option value="3eme">3eme année</option>
                        <option value="4eme">4eme année</option>
                        <option value="5eme">4eme année</option>
                   </NativeSelect>
                   <br></br>
                   <NativeSelect style={styles} defaultValue={values.type_Bac} onChange={this.props.handleChange('type_Bac')}>
                        <option value="">Selectionez type de votre Bac</option>
                        <option value="Licence">Licence</option>
                        <option value="DUT">DUT</option>
                   </NativeSelect>
               
                
                   <NativeSelect style={styles}   defaultValue={values.annee_Bac} onChange={this.props.handleChange('annee_Bac')}>
                   <option value="">Selectionez l'annee de votre Bac</option>
                   <option value="2020">2020</option>
                   <option value="2019">2019</option>
                   <option value="2018">2018</option>
                   <option value="2017">2017</option>
                   <option value="2016">2016</option>
                   <option value="2015">2015</option>
                   <option value="2014">2014</option>
                   <option value="2013">2013</option>
                   </NativeSelect>
                   <NativeSelect style={styles}   defaultValue={values.mention} onChange={this.props.handleChange('mention')}>
                   <option value="">Selectionez votre mention du Bac</option>
                   <option  value="tres bien">Tres bien</option>
                   <option  value=" bien"> bien</option>
                   <option  value="Assez bien">Assez bien</option>
                  
                   </NativeSelect>
                         
                   <NativeSelect style={styles}   defaultValue={values.status} onChange={this.props.handleChange('status')}>
                   
                   <option  value="externe">etudiant externe</option>
                   <option  value="cp1"> etudiant cp1</option>
                   <option  value="cp2"> etudiant cp2</option>
                   <option  value="GI">etudinat ingenieur</option>
                  
                   </NativeSelect>

                    <br></br>
                   
                   <TextField style={styles} floatingLabelFixed="Lycée" placeholder="Nom de votre Lycée" floatingLabelText="Lycée"  defaultValue={values.lycee}  onChange={this.props.handleChange('lycee')}></TextField>

                   <TextField style={styles} floatingLabelFixed="Délegation" placeholder="" floatingLabelText="Délegation" defaultValue={values.delegue} onChange={this.props.handleChange('delegue')}></TextField>
                   
                   <TextField style={styles} floatingLabelFixed="Académie" placeholder="" floatingLabelText="Académie" defaultValue={values.academie}  onChange={this.props.handleChange('academie')}></TextField>

                   
                   </div>
                   
                   </div>

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
   marginBottom:'15px',
   width:'250px',
  
}
const stylesS={
    marginLeft:'50px',
    marginBottom:'15px',
    width:'400px',
   
 }
const divS={
   padding:'auto',
   margin:'50px'
}

