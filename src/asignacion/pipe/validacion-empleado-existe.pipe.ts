import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "src/orm/entity/empleado.entity";
import { Repository } from "typeorm";

@Injectable()
export class ValidacionEmpleadoExistePipe implements PipeTransform {

  constructor(
    @InjectRepository(Empleado) private readonly empleadoRepository: Repository<Empleado>
  ) {}

  async transform(rutEmpleado: any, metadata: ArgumentMetadata) {
    let existe : boolean = await this.empleadoRepository.existsBy({
      rut: rutEmpleado
    });
    if (!existe) {
      throw new BadRequestException('El empleado no existe');
    }
    return rutEmpleado;
  }
}
