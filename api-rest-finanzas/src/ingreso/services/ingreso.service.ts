import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Ingreso } from "../entities/ingreso.entity";

//ingreso hace referencia a los servicios genericos 
@Injectable()
export class IngresoService extends BaseService<Ingreso>{

    //inyecta el repositorio
    constructor(@InjectRepository(Ingreso) private ingresoRepo: Repository<Ingreso>){
        super();
    }


    getRepository(): Repository<Ingreso> {
        return this.ingresoRepo;
    }
}