import React, { useEffect, useState } from 'react';
import { Drawer, Skeleton } from 'antd';
import useFetchData from './service';

const CareerDetails = ({ player, visible, onClose }) => {

const m= localStorage.getItem("formassar");
    const [details, setDetails] = useState({});
    const [showResults, setShowResults] = React.useState(false);
    const [isLoading, output] = useFetchData('./' + player.replace(' ', '_') + '.json');
    const onClick = () => setShowResults(true)

    return (   

    
        <Drawer 
            destroyOnClose
            title={player}
            visible={visible}
            width={640}
            onClick={onClick}
        >
            <Skeleton active loading={isLoading} paragraph={{ rows: 4 }} >
                <div style={{ padding: 10, background:'#00001a',color:'white'}}>
                    <center><h4 style={{color:'#09d3ac'}}>Informations personnelles :</h4></center>
                    <p>MASSAR ou CNE : {localStorage.getItem("formassar")} </p>
                    <p>CIN: { localStorage.getItem("cin") } </p>
                    <p>Adresse:{ localStorage.getItem("address")} </p>
                    <p>téléphone : { localStorage.getItem("telephone")} </p>
                    <p>email:{ localStorage.getItem("email")} </p>

                </div>
                  <br/>  

                <div style={{ padding: 10, background:'#00001a',color:'white'}}>
                    <center><h4 style={{color:'#09d3ac'}}>Informations des parents :</h4></center>
                    <p>Nom du pére : { localStorage.getItem("nom_Prenom_Pere")} </p>
                    <p>Profession : { localStorage.getItem("profession_Pere") }</p>
                    <p>Nom de la mére: { localStorage.getItem("nom_Prenom_mere")} </p>
                    <p>Profession : { localStorage.getItem("profession_mere")} </p>
                    <p>adresse des parents: { localStorage.getItem("adresse_parent")}</p>

                </div>

                <br/> 

                <div style={{ padding: 10, background:'#00001a',color:'white'}}>
                    <center><h4 style={{color:'#09d3ac'}}>Informations du baccalauréat :</h4></center>
                    <p>Type du bac: {   localStorage.getItem("type_Bac")} </p>
                    <p>Année du bac : { localStorage.getItem("annee_Bac")} </p>
                    <p>Mention du Bac: { localStorage.getItem("mention")} </p>
                    <p>Lycée du bac: { localStorage.getItem("lycee")} </p>
                 
 

                </div>

                
            </Skeleton>
        </Drawer>
      
    )
}

export default CareerDetails;
