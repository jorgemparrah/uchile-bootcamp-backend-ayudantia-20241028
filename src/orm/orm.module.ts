import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entity/empleado.entity';
import { Proyecto } from './entity/proyecto.entity';
import { Tarea } from './entity/tarea.entity';
import { Usuario } from './entity/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        Empleado,
        Proyecto,
        Tarea,
        Usuario,
      ]
    })
  ],
})
export class OrmModule {}
