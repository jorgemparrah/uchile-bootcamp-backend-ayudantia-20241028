import { Module } from '@nestjs/common';
import { OrmModule } from './orm/orm.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { CommonsModule } from './commons/commons.module';
import { AsignacionModule } from './asignacion/asignacion.module';

@Module({
  imports: [OrmModule, EmpleadoModule, ProyectosModule, CommonsModule, AsignacionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
