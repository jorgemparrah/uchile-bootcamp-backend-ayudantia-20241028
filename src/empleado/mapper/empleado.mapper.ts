import { Empleado } from "src/orm/entity/empleado.entity";
import { CreateEmpleadoDto } from "../dto/create-empleado.dto";
import { Get } from '@nestjs/common';
import { GetEmpleadoDto } from "../dto/get-empleado.dto";

export class EmpleadoMapper {

  static dtoToEntity(dto: CreateEmpleadoDto): Empleado {
    const entity = new Empleado();
    entity.rut = dto.rut;
    entity.nombre = dto.nombre;
    entity.emailUsuario = dto.email;
    return entity;
  }

  static entityToDto(entity: Empleado): GetEmpleadoDto {
    const dto = new GetEmpleadoDto();
    dto.rut = entity.rut;
    dto.nombre = entity.nombre;
    dto.email = entity.emailUsuario;
    return dto;
  }
}
