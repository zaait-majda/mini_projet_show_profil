
import { Controller, Get, Post, Body, UseGuards, Delete, Param } from '@nestjs/common';
import { FilieresService } from './filieres.service';
import { Filiere } from './filiere.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('filieres')
export class FilieresController {
    constructor(private filiereService:FilieresService){}

    @Get("")
    async getAllFilieres():Promise<Filiere[]>{
        return await this.filiereService.getAllFilieres();
    }
    @Get(':id_filiere')
    async  getTudo(@Param('id_filiere') fil:number){
        return  this.filiereService.getById(fil);
    }

    @Post("/add")
    @UseGuards(AuthGuard("jwt-admin"))
    async createFiliere(@Body() body):Promise<Filiere>{
        return await this.filiereService.createFiliere(body.nom_filiere);
    }

    @Delete("/delete/:id")
    @UseGuards(AuthGuard("jwt-admin"))
    async deleteFiliere(@Body() body):Promise<Filiere>{
        return await this.filiereService.createFiliere(body.nom_filiere);
    }

    @Delete("/delete/:id")
    @UseGuards(AuthGuard("jwt-admin"))
    async updateFiliere(@Body() body):Promise<Filiere>{
        return await this.filiereService.createFiliere(body.nom_filiere);
    }

}
