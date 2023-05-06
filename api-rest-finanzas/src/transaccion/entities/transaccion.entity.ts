//importacion de typeorm
import { Usuario } from "src/usuario/entities/usuario.entity";
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm"

//se define la entidad Transaccion
@Entity()
export class Transaccion {

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

    @ManyToOne(() => Usuario, usuario => usuario.transacciones)
    @JoinColumn({name: "usuario_id"})
    usuario: Usuario;

    //@Column()
    //usuario_id: number;


}