import React, {Component, useState, state} from 'react';
import '../App.css';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import {MailOutlined, UserOutlined, ReloadOutlined,LogoutOutlined,ScheduleOutlined, FilePdfOutlined, SecurityScanTwoTone} from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';
import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';
import user from './user.png';
import Axios from "axios";



 export default class profil extends React.Component{
 
 
 state={
   etuds:[],
   filieres:[]
 }

 async componentDidMount(){
 
    const massar=localStorage.getItem("massar");
  const res1= await  Axios.get("http://localhost:4000/etuds/"+massar);
  if(res1.data){
   const  idfil= res1.data.id_filiere;
    const res2= await Axios.get("http://localhost:4000/filieres/"+idfil);
     const formassar = res1.data.massar
     localStorage.setItem("formassar",formassar);
     const lastname_fr = res1.data.lastname_fr
  localStorage.setItem("lastname_fr",lastname_fr);
  const fil = res1.data.filiereIdFiliere
  localStorage.setItem("fil",fil);
  const fill = res2.data.nom_filiere
  localStorage.setItem("fill",fill); 
 const cin=res1.data.cin;
 localStorage.setItem("cin",cin); 
 const email= res1.data.email;
 localStorage.setItem("email",email); 
 const address=res1.data.address;
 localStorage.setItem("address",address); 
 const telephone=res1.data.telephone;
 localStorage.setItem("telephone",telephone); 
 const nom_Prenom_Pere= res1.data.nom_Prenom_Pere;
 localStorage.setItem("nom_Prenom_Pere",nom_Prenom_Pere); 
 const profession_Pere=res1.data.profession_Pere;
 localStorage.setItem("profession_Pere",profession_Pere); 
 const nom_Prenom_mere	=res1.data.nom_Prenom_mere;
 localStorage.setItem("nom_Prenom_mere",nom_Prenom_mere); 
 const profession_mere= res1.data.profession_mere;
 localStorage.setItem("profession_mere",profession_mere);  
 const adresse_parent= res1.data.adresse_parent;
 localStorage.setItem("adresse_parent",adresse_parent); 
 const type_Bac = res1.data.type_Bac;
 localStorage.setItem("type_Bac",type_Bac);  
 const annee_Bac= res1.data.annee_Bac;
 localStorage.setItem("annee_Bac",annee_Bac);  
 const mention= res1.data.mention;
 localStorage.setItem("mention",mention);
 const lycee=res1.data.lycee;
 localStorage.setItem("lycee",lycee); 
 const niveau = res1.data.niveau;
 localStorage.setItem("niveau",niveau); 

  }
  }


  render(){
    const { Content } = Layout;
    var visible=true;
   
  
 
  
  
          return(
           
  
         <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 580}}>
            
            <Cricketer name={localStorage.getItem("lastname_fr")}  Filière={localStorage.getItem("fill")} avatarSrc={user}>
              <TestCareer CNE={localStorage.getItem("formassar")} >
                <Bowling Niveau={localStorage.getItem("niveau")} CIN={ localStorage.getItem("cin")} />
              </TestCareer>
              <Button type='dashed' style={{float:'right', background:'#00001a',color:'white',margin:'15px 45px'}}> plus d'informations </Button>
            </Cricketer>
          </div>
          <CareerDetails player={localStorage.getItem("lastname_fr")} visible={visible}/>
        </Content>
           
       
         );
        

          }
  

        }  