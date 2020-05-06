import React, { Component } from 'react'
import FirstStep from './FirstStep';
import jsPDF from 'jspdf';
import SecondeStep from "./SecondeStep";
import ThirdStep from './ThirdStep';
import Success from './Success';
import FourthStep from './FourthStep';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Steps, Button, message } from 'antd';
import { DownloadOutlined,CheckCircleOutlined } from '@ant-design/icons';
import TestStep from './TestSep'
const Step = Steps.Step;


 class reinscriptionForm  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        current:0,
        step:1,
        token:'',
        cin:'',
        massar:'',
   //     email:'',
        firstname_fr:'',
        lastname_fr:'',
        firstname_ar:'',
        lastname_ar:'',
        date_Naissance:'',
        lieu_Naissance:'',

        picture:'4.jpg',
        nationalite:'',
        telephone:'',
        address:'',
        nom_Prenom_Pere:'',
        profession_Pere:'',
        nom_Prenom_mere:'',
        profession_mere:'',
        adresse_parent:'',
        id_filiere:'',
        niveau:'',
        type_Bac:'',
        annee_Bac:'',
        lycee:'',
        mention:'',
        delegue:'',
        academie:'',
        Type_diplome:'',
        note:0,
        status:'',
      
        password:'',
        picture2:'',
        valide:false


        };


        this.state2={
            cin:'',
            massar:'',
       //     email:'',
            firstname_fr:'',
            lastname_fr:'',
            firstname_ar:'',
            lastname_ar:'',
        
    
            picture:'4.jpg',
            nationalite:'',
            telephone:'',
            address:'',
            nom_Prenom_Pere:'',
            profession_Pere:'',
            nom_Prenom_mere:'',
            profession_mere:'',
            adresse_parent:'',
        
            niveau:'',
            type_Bac:'',
            annee_Bac:'',
            lycee:'',
            mention:'',
            delegue:'',
            academie:'',
            Type_diplome:'',
            note:0,
            status:'',
          
            password:'',
         
        }
      }
      nextStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step+1
        });
    }
    signedIn=()=>{
        return (this.state.token==='')?true:false;
    }
    
    //Fields CHange
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});

      
    }

  /*  handleChange2=input=>e=>{
      this.setState({[input]:e.target.files[0]});

    
  }*/
    prevStep=()=>{
        const {step}=this.state;
        this.setState({
            step:step-1
        });
    }
    handleGoogleAuth=(input,value)=>{
        this.setState({[input]:value});
        console.log(input);
        console.log(value);
        
    }

    
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }



      uploadFile = (event) => {
       event.preventDefault();
        this.setState({error: '', msg: ''});
        if(!this.state.picture2) {
          this.setState({error: 'Please upload a file.'})
          return;
        }
        if(this.state.picture2.size >= 2000000) {
          this.setState({error: 'File size exceeds limit of 2MB.'})
          return;
        }
        let data = new FormData();
        data.append('picture2', this.state.picture2);
        data.append('name', this.state.picture2.name);
        fetch('http://localhost:4000/etuds/multiple', {
          method: 'POST',
          body: data
        }).then(response => {
          this.setState({error: '', msg: 'Sucessfully uploaded file'});
        }).catch(err => {
          this.setState({error: err});
        });


        this.state2.picture=this.state.picture2.name;
        this.state2.firstname_ar=this.state.firstname_ar;
        this.state2.firstname_fr=this.state.firstname_fr;
        this.state2.lastname_ar=this.state.lastname_ar;
        this.state2.lastname_fr=this.state.lastname_fr;
        this.state2.cin=this.state.cin;
        this.state2.nationalite=this.state.nationalite;
        this.state2.telephone=this.state.telephone;

        this.state2.address=this.state.address;
        this.state2.nom_Prenom_Pere=this.state.nom_Prenom_Pere;
        this.state2.profession_Pere=this.state.profession_Pere;
        this.state2.profession_mere=this.state.profession_mere;
        this.state2.nom_Prenom_mere=this.state.nom_Prenom_mere;
        this.state2.adresse_parent=this.state.adresse_parent;

        this.state2.niveau=this.state.niveau;
        this.state2.annee_Bac=this.state.annee_Bac;
        this.state2.type_Bac=this.state.type_Bac;

        this.state2.lycee=this.state.lycee;
        this.state2.mention=this.state.mention;
        this.state2.delegue=this.state.delegue;

        this.state2.academie=this.state.academie;
        this.state2.mention=this.state.mention;
        this.state2.Type_diplome=this.state.Type_diplome;
        this.state2.status=this.state.status;
        this.state2.mention=this.state.mention;
        this.state2.Type_diplome=this.state.Type_diplome;
        this.state2.password=this.state.password;
  
      let data2=this.state2;
      fetch('http://localhost:4000/etuds/'+this.state.massar+'/update', {
        method: 'PUT',
        headers:
        {
         "Content-Type":"application/json",
         "Accept":"application/json",

        },
        body:JSON.stringify(data2)

       
    });



    this.state.valide=true;
      }
      
// fonction pour telecharger le recu
      unduhPdf(e){
        e.preventDefault();
    
        var doc = new jsPDF({
         
          unit: 'in',
      
          format: ['11.69', '08.27']
        })
       
        doc.text(`Le Prenom:            ${this.state.firstname_fr} `, 0.5, 0.5)
        doc.text(`Le Nom:               ${this.state.lastname_fr} `, 0.5, 1)
        doc.text(`Le Niveau:            ${this.state.niveau} `, 0.5, 1.5)
        doc.text(`Adresse:              ${this.state.address} `, 0.5, 2)
        doc.text(`Nationalité:          ${this.state.nationalite} `, 0.5, 2.5)
     //  doc.addImage(`@../../../uploads/${this.state.picture}`, 'jpg', 0.5, 2, 2.5, 2.5)
        // format: (image_file, 'image_type', X_init, Y_init, X_fin, Y_fin)
    
        doc.save(`Recu.pdf`)
      };
    








      render() {
        const { current } = this.state;
        const {cin,massar,password}=this.state;
        const values_step1={cin,massar,password};
        const {picture,firstname_fr, lastname_fr,firstname_ar,nationalite, telephone,address, lastname_ar,date_Naissance,lieu_Naissance}=this.state;
        const values_step2={picture,firstname_fr, lastname_fr,firstname_ar,nationalite, telephone,address, lastname_ar,date_Naissance,lieu_Naissance};
        const {nom_Prenom_Pere,profession_Pere,nom_Prenom_mere,profession_mere,adresse_parent}=this.state;
        const values_step3={nom_Prenom_Pere,profession_Pere,nom_Prenom_mere,profession_mere,adresse_parent};


        const {type_Bac,annee_Bac,mention,lycee,delegue,academie,id_filiere,niveau,status}=this.state;
        const values_step4={type_Bac,annee_Bac,mention,lycee,delegue,academie,id_filiere,niveau,status};

        const steps = [{
          title: '',
          content:<MuiThemeProvider>
          <FirstStep nextStep={this.nextStep} signedIn={this.signedIn} handleGoogleAuth={this.handleGoogleAuth} handleChange={this.handleChange} values={values_step1}></FirstStep>
          </MuiThemeProvider>,
        }, {
          title: '',
          content: <MuiThemeProvider>
          <SecondeStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step2}></SecondeStep>
          
          <input type="file" name="{picture2"   onChange={(data)=>{this.setState({picture2:data.target.files[0]})}}/> 
       
          </MuiThemeProvider>,
        }, {
          title: '',
          content:  <MuiThemeProvider>
          <ThirdStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step3}></ThirdStep>
          </MuiThemeProvider>,
        },
        {
          title: '',
          content:  <MuiThemeProvider>
          <FourthStep nextStep={this.nextStep} prevStep={this.prevStep} handleChange={this.handleChange} values={values_step4}></FourthStep>
          </MuiThemeProvider>,
        },
        {
          title: '',
          content: <MuiThemeProvider>
      
        {this.state.valide===true
         &&
         <div>
         <h6 className="suc">Vous etes inscrit avec sucess <CheckCircleOutlined /></h6>
        <div className="styleTab">
     
        
          <img src={require(`@../../../uploads/${this.state.picture}`)} class="logo2"/>
          <br></br>
           <table >
             <tr className="trStyle"><th>Massar</th><th  className="esp">{this.state.massar}</th></tr>
             <tr className="trStyle"><th>CIN</th><th  className="esp">{this.state.cin}</th></tr>
             <tr className="trStyle"><th>Le nom</th><th className="esp">{this.state.firstname_fr}</th></tr>
            
             <tr className="trStyle"><th>Le Prenom</th><th className="esp">{this.state.lastname_fr}</th></tr>
             <tr className="trStyle"><th>Nationalité</th><th className="esp">{this.state.nationalite}</th></tr>
             <tr className="trStyle"><th>Niveau</th><th className="esp">{this.state.niveau}</th></tr>
             <tr className="trStyle"><th>Adresse</th><th className="esp">{this.state.address}</th></tr>
             <tr className="trStyle"><th>Telephone</th><th  className="esp">{this.state.telephone}</th></tr>
           </table>
           <br></br>
       
         

           </div>
           <Button type="primary" onClick={this.unduhPdf.bind(this)}  icon={<DownloadOutlined />}>telecharger votre recu</Button>
           <br></br><br></br>
           </div> 
        }
           {this.state.valide===false
              &&
              <div><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
              <br></br><br></br></div>
             }
     
          </MuiThemeProvider>,
        }];


        return (
     
         <div className="form" style={ formStyle}>
           
              <br></br> <br></br>
            <Steps  size="small" current={current} >
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>

            <div className="steps-content"> {
            steps[this.state.current].content
            }</div>
            <div className="steps-action">
            {
                this.state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }

              {
                this.state.current === steps.length - 1
                &&
                
                <Button type="primary" onClick={this.uploadFile}>Valider </Button>
            
            
              }
 
              
            </div>
          </div>
        );
      }
  
}

export default reinscriptionForm ;
const formStyle={
marginLeft:'400px',
width:'45%'

}
