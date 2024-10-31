import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "src/orm/entity/empleado.entity";
import { Repository } from "typeorm";

@Injectable()
export class ValidacionEmpleadosExistenPipe implements PipeTransform {

  constructor(
    @InjectRepository(Empleado) private readonly empleadoRepository: Repository<Empleado>
  ) {}

  async transform(rutEmpleados: any, metadata: ArgumentMetadata) {
    const rutNoExisten = [];
    for (let rut of rutEmpleados) {
      let existe : boolean = await this.empleadoRepository.existsBy({
        rut: rut
      });
      if (!existe) {
        rutNoExisten.push(rut);
      }
    }
    if (rutNoExisten.length > 0) {
      throw new BadRequestException('Los siguientes empleados no existen: ' + rutNoExisten.join(", "));
    }
    return rutEmpleados;
  }
}
