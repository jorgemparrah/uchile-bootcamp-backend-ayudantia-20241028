import { ArgumentMetadata, BadRequestException, Inject, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "src/orm/entity/empleado.entity";
import { Repository } from "typeorm";

@Injectable()
export class ValidacionCrearEmpleadoPipe implements PipeTransform {

  constructor(
    @InjectRepository(Empleado) private readonly empleadoRepository: Repository<Empleado>
  ) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    let existe : boolean = await this.empleadoRepository.existsBy({
      rut: value.rut
    });
    if (existe) {
      throw new BadRequestException('El rut del empleado ya existe');
    }

    existe = await this.empleadoRepository.existsBy({
      emailUsuario: value.email
    });
    if (existe) {
      throw new BadRequestException('El email ya esta asignado a otro empleado');
    }
    return value;
  }
}
