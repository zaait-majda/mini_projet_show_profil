import { Entity, BaseEntity, PrimaryColumn,ManyToOne, Column,Double } from "typeorm";

import { Filiere } from "src/filieres/filiere.entity";

@Entity()
export class etudiant extends BaseEntity{
    
    @PrimaryColumn("varchar",{length:30})
    massar:string;

    @Column("varchar", { length: 30 })
    cin:string;

    @Column("varchar", { length: 30 })
    password:string;

    @Column("varchar", { length: 30 })
    email:string;

    @Column("double")
    note:Double;

    @Column()
    id_filiere:Number;



   
    @Column("varchar", { length: 30 })
    lastname_fr:string;

    @Column("varchar", { length: 30 })
    lastname_ar:string;

    @Column("varchar", { length: 30 })
    firstname_fr:string;

    @Column("varchar", { length: 30 })
    firstname_ar:string;

    @Column("varchar", { length: 30 })
    nationalite:string;

    @Column("varchar", { length: 30 })
    address:string;

    @Column("varchar", { length: 20 })
    telephone:string;

    @Column("varchar", { length: 30 })
     nom_Prenom_Pere:string;

    @Column("varchar", { length: 30 })
    profession_Pere:string;

    @Column("varchar", { length: 40 })
    nom_Prenom_mere:string;

    @Column("varchar", { length: 50 })
    profession_mere:string;

    @Column("varchar", { length: 10 })
    adresse_parent:string;

    /*@Column("varchar", { length: 30 })
    parents_phone:string;*/

    @Column("varchar", { length: 30 })
    annee_Bac:string;

    @Column("varchar", { length: 100})
    type_Bac:string;

    @Column("varchar", { length: 1100 })
    mention:string;


    @Column("varchar", { length: 1100 })
    lycee:string;

    @Column("varchar", { length: 100})
    delegue:string;

    @Column("varchar", { length:100 })
    academie:string;

    @Column("varchar", { length: 100 })
    picture:string;



    
    @Column("varchar", { length: 100 })
    niveau:string;

    @ManyToOne(type => Filiere, filiere => filiere.liste_etudiant)
    filiere: Filiere;


        
    @Column("varchar", { length: 100 })
    status:string;

    @Column("varchar", { length: 100 })
    Type_diplome:string;



 
}