import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Transaccion } from "../entities/transaccion.entity";

//Transaccion hace referencia a los servicios genericos 
@Injectable()
export class TransaccionService extends BaseService<Transaccion>{

    //inyecta el repositorio
    constructor(@InjectRepository(Transaccion) private transaccionRepo: Repository<Transaccion>){
        super();
    }


    getRepository(): Repository<Transaccion> {
        return this.transaccionRepo;
    }
}