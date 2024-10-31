import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from 'src/orm/entity/proyecto.entity';
import { ProyectosController } from './controller/proyectos.controller';
import { ProyectosService } from './service/proyectos.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ Proyecto ])
  ],
  controllers: [ProyectosController],
  providers: [ProyectosService],
})
export class ProyectosModule {}
