import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleado.service';
import { EmpleadoController } from './empleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from 'src/orm/entity/empleado.entity';
import { Usuario } from 'src/orm/entity/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Empleado,
      Usuario,
    ]),
  ],
  controllers: [EmpleadoController],
  providers: [EmpleadoService],
})
export class EmpleadoModule {}
