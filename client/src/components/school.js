import React, {Component, useState, state} from 'react';
import '../App.css';
import ensa from '../images/index.jpg';



function school (){


    return(
      <div>
        <img src={ensa} style={{width:'80%',height:'450px', margin:'2% 10%'}}/>
        <p style={{ margin:'10px 40px'}}>
        L'Ecole Nationale des Sciences Appliquées de SAFI (ENSA Safi) est un établissement universitaire
        relevant de l’université Cadi Ayyad et sous la tutelle du ministère de l’enseignement supérieur
        et de la recherche scientifique. Elle fait partie du réseau des écoles nationales des sciences 
        appliquées réparties sur l’ensemble du territoire national au niveau des grandes villes universitaires
        du pays. L'ENSAS est spécialisée dans tout ce qui concerne l’enseignement supérieur, la recherche 
        scientifique et technique et la formation d’ingénieurs et des cadres ainsi que la formation continue.

        L'ENSA Safi vise d’atteindre plusieurs objectifs, tel que La formation d’ingénieurs d’Etat sur les
        plans théorique et pratique en parfaite adéquation avec les besoins du développement industriel,
        économique et social aussi bien au niveau régional que national.
        La mise en place d’une coopération et d’un partenariat avec les opérateurs industriels, économiques
         et sociaux au niveau de la région et à l’échelle internationale.Ainsi que La dynamisation de 
         la recherche scientifique et technique.

        Cette plateforme est offerte aux étudiants de l'école, c'est un espace étudiant, pour la réinscription
        ,le choix de filière et le téléchargement du reçu de préinscription.


        </p>

        </div>

    );
}



export default school;