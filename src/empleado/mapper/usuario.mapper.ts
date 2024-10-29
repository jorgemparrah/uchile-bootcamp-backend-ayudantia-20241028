import { Usuario } from "src/orm/entity/usuario.entity";
import { CreateEmpleadoDto } from "../dto/create-empleado.dto";

export class UsuarioMapper {

  static dtoToEntity(dto: CreateEmpleadoDto): Usuario {
    const entity = new Usuario();
    entity.email = dto.email;
    entity.clave = dto.clave;
    return entity;
  }

}
