import { Module } from '@nestjs/common';
import { AsignacionController } from './controller/asignacion.controller';
import { AsignacionService } from './service/asignacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarea } from 'src/orm/entity/tarea.entity';
import { Empleado } from 'src/orm/entity/empleado.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([ Empleado, Tarea ]) ],
  controllers: [ AsignacionController ],
  providers: [ AsignacionService ],
})
export class AsignacionModule {}
