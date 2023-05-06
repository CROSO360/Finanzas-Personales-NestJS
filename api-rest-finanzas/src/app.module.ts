/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { CuentaBancariaModule } from './cuenta_bancaria/cuenta_bancaria.module';
import { IngresoModule } from './ingreso/ingreso.module';
import { TransaccionModule } from './transaccion/transaccion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: '123456',
      database: 'finanzas',
      autoLoadEntities: true
    }),
    UsuarioModule, 
    CuentaBancariaModule,
    IngresoModule,
    TransaccionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
