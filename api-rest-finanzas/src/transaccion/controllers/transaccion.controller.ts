import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Controller } from "@nestjs/common";
import { Transaccion } from "../entities/transaccion.entity";
import { TransaccionService } from "../services/transaccion.service";

//Transaccion hace uso de los servicios genericos
//se asigna la ruta
@Controller('api/transaccion')
export class TransaccionController extends BaseController<Transaccion>{

    //inyecta el servicio
    constructor(private readonly transaccionService: TransaccionService){
        super();
    }

    getService(): BaseService<Transaccion> {
        return this.transaccionService;
    }
    
}