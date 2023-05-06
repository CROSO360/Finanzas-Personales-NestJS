//importacion de typeorm
import { Usuario } from "src/usuario/entities/usuario.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"


//se define la entidad usuario
@Entity()
export class Ingreso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'date'})
    fecha: Date;

    @Column()
    descripcion: string;

    @Column()
    monto: number;

    @Column()
    categoria: string;

    //@Column()
    //usuario_id: number;

    @ManyToOne(() => Usuario, usuario => usuario.ingresos)
    @JoinColumn({name: "usuario_id"})
    usuario: Usuario;


}