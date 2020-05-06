import { IsString, MinLength, MaxLength, IsNumber, IsDate } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Double } from "typeorm";
import { isNumber } from "util";

export class CreateEtudiantDTO{


    

    massar:string;

    cin:string;

    password:string;

    email:string;


    note:Double;


    lastname_fr:string;


    lastname_ar:string;


    firstname_fr:string;

 
    firstname_ar:string;


    nationalite:string;

 
    address:string;


    telephone:string;


     nom_Prenom_Pere:string;

    profession_Pere:string;


    nom_Prenom_mere:string;

    profession_mere:string;

   
    adresse_parent:string;

    annee_Bac:string;


    type_Bac:string;

    mention:string;

  

    lycee:string;


    delegue:string;

 
    academie:string;


    picture:string;

    niveau:string;

    id_filiere:number;


    status:string;

    Type_diplome:string;


    

}