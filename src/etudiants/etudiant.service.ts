import {
    Injectable,
    ConflictException,
    InternalServerErrorException,
    NotFoundException, 
    UnauthorizedException
  } from '@nestjs/common';
  import { etudiant } from './etudiant.entity';
  import { etudiantRepository } from './etudiant.repository';
  import { InjectRepository } from '@nestjs/typeorm';
  import { CreateEtudiantDTO } from './dto/createEtudiantDTO';
  
  import { FiliereRepository } from 'src/filieres/filiere.repository';
  import { Filiere } from 'src/filieres/filiere.entity';
import { AuthDTO } from 'src/candidatures/dto/AuthDTO';
import { JwtPayload } from 'src/candidatures/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

  @Injectable()
  export class etudiantsService {
 
    constructor(
      @InjectRepository(etudiantRepository)
      private etudiantRepository: etudiantRepository,
      private filiereRepository: FiliereRepository,
    
      private jwtService: JwtService,
     
    ) {}
  
    async getAllEtudiants(): Promise<etudiant[]> {
      return await this.etudiantRepository.find();
    }
  


    async getByMassar(massar:string): Promise<etudiant> {
      const found= await this.etudiantRepository.findOne(massar);
     
      if(!found){

        throw new NotFoundException('this etudiant  not found !! ')
      }
      return found;
  }

  
    async createEtudiant(createEtDTO: CreateEtudiantDTO): Promise<void> {
  
     
      
      
      // create new etudiant
      var Et = this.etudiantRepository.create();
     
      Et.massar=createEtDTO.massar;
      Et.cin=createEtDTO.cin;
      Et.email=createEtDTO.email;
 
 
 
      Et.note=createEtDTO.note;
      Et.lastname_fr=createEtDTO.lastname_fr;
      Et.lastname_ar=createEtDTO.lastname_ar;
      Et.firstname_fr=createEtDTO.firstname_fr;
      Et.firstname_ar=createEtDTO.firstname_ar;
      Et.nationalite=createEtDTO.nationalite;
      Et.address=createEtDTO.address;
      Et.telephone=createEtDTO.cin;
      Et.nom_Prenom_Pere=createEtDTO.nom_Prenom_Pere;
      Et.profession_Pere=createEtDTO.profession_Pere;
      Et.nom_Prenom_mere=createEtDTO.nom_Prenom_mere;
      Et.profession_mere=createEtDTO.profession_mere;

 Et.lycee=createEtDTO.lycee;
      Et.adresse_parent=createEtDTO.adresse_parent;
      Et.annee_Bac=createEtDTO.annee_Bac;
      Et.type_Bac=createEtDTO.type_Bac;
      Et.mention=createEtDTO.mention;
      Et.password=createEtDTO.password;
      Et.delegue=createEtDTO.delegue;
      Et.academie=createEtDTO.academie;
      Et.niveau=createEtDTO.niveau;
      Et.picture=createEtDTO.picture;
      Et.status=createEtDTO.status;
      Et.Type_diplome=createEtDTO.Type_diplome;
  Et.id_filiere=createEtDTO.id_filiere;
      // Get the filiere object from the id
      let filiere: Filiere = await this.filiereRepository.findOne({
       id_filiere: createEtDTO.id_filiere,
      });
      Et.filiere = filiere;
    
      try {
          await this.etudiantRepository.insert(Et);
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          throw new ConflictException('Code Massar , CIN or Email Already Exist');
        }else {
          throw new InternalServerErrorException();
        }
      }
    }
  
        
   async update(contact: CreateEtudiantDTO): Promise<any> {
      return await this.etudiantRepository.update(contact.massar, contact);
  }
  async delete(id): Promise<any> {
    return await this.etudiantRepository.delete(id);
}




async signIn(authDTO: AuthDTO): Promise<{ accessToken: string }> {
  const { massar, email, password } = authDTO;

  const etudiant = await this. etudiantRepository.findOne({
    email,
    massar,
  });

  if (etudiant) {
  
      const payload: JwtPayload = { massar, email };

      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
  
  } else {
    throw new UnauthorizedException('Invalid Credentials');
  }
}
  }
  