import { BaseController } from "src/commons/controller.commons";
import { Usuario } from "../entities/usuario.entity";
import { BaseService } from "src/commons/service.commons";
import { UsuarioService } from "../services/usuario.service";
import { Controller, Get, Param } from "@nestjs/common";
import { log } from "console";

//usuario hace uso de los servicios genericos
//se asigna la ruta
@Controller('api/usuario')
export class UsuarioController extends BaseController<Usuario>{

    //inyecta el servicio
    constructor(private readonly usuarioService: UsuarioService) {
        super();
    }

    getService(): BaseService<Usuario> {
        return this.usuarioService;
    }

    @Get('datos-mensuales/:id')
    async getDatosMensuales(@Param('id') id: number) {
        const datosMensuales = await this.usuarioService.getDatosMensuales(id);
        return { data: datosMensuales };
    }

    @Get('cuentas-bancarias/:id')
    async getCuentasBancarias(@Param('id') id: number){
        const cuentasBancarias = await this.usuarioService.getCuentasBancarias(id);
        return cuentasBancarias;
    }


}