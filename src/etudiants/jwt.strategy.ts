import { JwtConstants } from './../../config/jwt.config';
import { JwtPayload } from './jwt-payload.interface';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { InjectRepository } from '@nestjs/typeorm';
import { etudiantRepository } from './etudiant.repository';
import { etudiant} from './etudiant.entity';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,"jwt-user"){
    constructor(
        @InjectRepository(etudiantRepository)
        private candRepo:etudiantRepository,
    ){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:JwtConstants.secret
        })
    }

    async validate(payload:JwtPayload) :Promise<etudiant>{
        console.log("Valdiate Jwt user called");

        const {massar,email} = payload;
        const etudiant = await this.candRepo.findOne({massar,email});

        if(!etudiant){
            throw new UnauthorizedException();
        }

        return etudiant;
    }
}