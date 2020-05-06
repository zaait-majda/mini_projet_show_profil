import { Controller,Param,Res, UseInterceptors, UploadedFiles ,UploadedFile, Get,Put, Post,Delete, Body, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { etudiantsService  } from './etudiant.service';
import { CreateEtudiantDTO } from './dto/CreateEtudiantDTO';
import { etudiant } from './etudiant.entity';
import  { imageFileFilter } from './imageFileFilter';
import {editFileName} from './editFileName';
import {FilesInterceptor} from '@nestjs/platform-express';
import { Filiere } from "src/filieres/filiere.entity";
import { diskStorage } from 'multer';
import { AuthDTO } from 'src/candidatures/dto/AuthDTO';
@Controller('etuds')
export class EtudiantsController {
    constructor(private etudiantsService:etudiantsService){ }

    @Get("")
    async getetudiants():Promise<etudiant[]>{
        return await this.etudiantsService.getAllEtudiants();
    }
    @Post("/add")
    @UsePipes(ValidationPipe) 
    async createEtudiant(@Body(ValidationPipe) createEtDTO: CreateEtudiantDTO):Promise<void>{
        return this.etudiantsService.createEtudiant(createEtDTO);
    }


    @Get(':massar')
    async  getTudo(@Param('massar') ma:string){
        return  this.etudiantsService.getByMassar(ma);
    }
    @Put(':id/update')
    async update(@Param('id') id, @Body() contactData: CreateEtudiantDTO): Promise<any> {
        contactData.massar =String(id);
        console.log('Update #' + contactData.massar)
        return this.etudiantsService.update(contactData);
    } 
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.etudiantsService.delete(id);
    }  




@Post('multiple')
@UseInterceptors(
  FilesInterceptor('picture2', 20, {
    storage: diskStorage({
      destination: './uploads',
      filename: editFileName,
    }),
    fileFilter: imageFileFilter,
  }),
)
async uploadMultipleFiles(@UploadedFiles() files) {
  const response = [];
  files.forEach(file => {
    const fileReponse = {
      originalname: file.originalname,
      filename: file.filename,
    };
    response.push(fileReponse);
  });
  return response;
}
@Get('/img/:imgpath')
seeUploadedFile(@Param('imgpath') image, @Res() res) {
  return res.sendFile(image, { root: './uploads' });
}

@Post("/signin")
async signIn(@Body(ValidationPipe) authDTO: AuthDTO):Promise<{accessToken:string}>{
    return this.etudiantsService.signIn(authDTO);
}

}

