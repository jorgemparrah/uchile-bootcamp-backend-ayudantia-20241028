import { Proyecto } from "src/orm/entity/proyecto.entity";
import { CreateProyectoDto } from "../dto/create-proyecto.dto";
import { DateMapper } from "src/commons/mapper/date.mapper";
import { GetProyectoDto } from "../dto/get-proyecto.dto";


export class ProyectoMapper {

  static dtoToEntity(dto: CreateProyectoDto): Proyecto {
    const entity = new Proyecto();
    entity.nombre = dto.nombre;
    entity.fechaInicio = DateMapper.stringToDate(dto.fechaInicio);
    entity.fechaTermino = DateMapper.stringToDate(dto.fechaFin);
    return entity;
  }

  static entityToDto(entity: Proyecto): GetProyectoDto {
    const dto = new GetProyectoDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.fechaInicio = DateMapper.dateToString(entity.fechaInicio, 'DD-MM-YYYY');
    dto.fechaFin = DateMapper.dateToString(entity.fechaTermino, 'DD-MM-YYYY');
    return dto;
  }

}
