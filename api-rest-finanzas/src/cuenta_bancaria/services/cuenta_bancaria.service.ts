import { Injectable } from "@nestjs/common";
import { BaseService } from "src/commons/service.commons";
import { CuentaBancaria } from "../entities/cuenta_bancaria.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

//cuenta bancaria hace referencia a los servicios genericos 
@Injectable()
export class CuentaBancariaService extends BaseService<CuentaBancaria>{
    
    

    //inyecta el repositorio
    constructor(@InjectRepository(CuentaBancaria) private cuentaBancariaRepo: Repository<CuentaBancaria>){
        super();
    }


    getRepository(): Repository<CuentaBancaria> {
        return this.cuentaBancariaRepo;
    }

    
}