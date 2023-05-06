import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { CuentaBancaria } from "../entities/cuenta_bancaria.entity";
import { CuentaBancariaService } from "../services/cuenta_bancaria.service";
import { BaseService } from "src/commons/service.commons";

//cuenta bancaria hace uso de los servicios genericos
//se asigna la ruta
@Controller('api/cuenta_bancaria')
export class CuentaBancariaController extends BaseController<CuentaBancaria>{

    //inyecta el servicio
    constructor(private readonly cuentaBancariaService: CuentaBancariaService){
        super();
    }

    getService(): BaseService<CuentaBancaria> {
        return this.cuentaBancariaService;
    }
    
}