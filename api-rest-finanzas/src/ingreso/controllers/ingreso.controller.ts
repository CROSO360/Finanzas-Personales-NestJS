import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Controller } from "@nestjs/common";
import { Ingreso } from "../entities/ingreso.entity";
import { IngresoService } from "../services/ingreso.service";

//ingreso hace uso de los servicios genericos
//se asigna la ruta
@Controller('api/ingreso')
export class IngresoController extends BaseController<Ingreso>{

    //inyecta el servicio
    constructor(private readonly ingresoService: IngresoService){
        super();
    }

    getService(): BaseService<Ingreso> {
        return this.ingresoService;
    }
    
}