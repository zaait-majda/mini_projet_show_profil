import { Module } from '@nestjs/common';
import { etudiantsService  } from './etudiant.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { etudiantRepository } from './etudiant.repository';
import { FiliereRepository } from 'src/filieres/filiere.repository';
import { EtudiantsController } from './etudiants.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from 'config/jwt.config';
import { MulterModule } from '@nestjs/platform-express';
import { JwtStrategy } from 'src/etudiants/jwt.strategy';




@Module({
  imports:[ PassportModule.register({ defaultStrategy:'jwt' }),
  JwtModule.register({
    secret: JwtConstants.secret,
    signOptions: {
      expiresIn: 3600,
    },
  }),TypeOrmModule.forFeature([etudiantRepository,FiliereRepository]),MulterModule.register({

    dest:'./uploads',
  })],
  providers:[etudiantsService, JwtStrategy],
  controllers:[EtudiantsController],
  exports: [JwtStrategy, PassportModule],
})
export class EtudiantModule {}



