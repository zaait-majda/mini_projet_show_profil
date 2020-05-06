import { Injectable, NotFoundException } from '@nestjs/common';
import { Filiere } from './filiere.entity';
import { FiliereRepository } from './filiere.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilieresService {

    constructor(
        @InjectRepository(FiliereRepository) 
        private filiereRepository:FiliereRepository)
        {}

    async getAllFilieres():Promise<Filiere[]>{
        return await this.filiereRepository.find();
    }

    async createFiliere(nom_filiere:string):Promise<Filiere>{
        const filiere = new  Filiere();
        filiere.nom_filiere=nom_filiere;
        filiere.created_at=new Date();
        filiere.updated_at=new Date();
        await this.filiereRepository.save(filiere);
        return filiere;
    }
    
    async getById(id_filiere:number): Promise<Filiere> {
        const found= await this.filiereRepository.findOne(id_filiere);
  
        if(!found){
  
          throw new NotFoundException('this filiere  not found !! ')
        }
        return found;
    }
  

}
