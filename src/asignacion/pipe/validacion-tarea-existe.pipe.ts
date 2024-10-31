import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tarea } from "src/orm/entity/tarea.entity";
import { Repository } from "typeorm";

@Injectable()
export class ValidacionTareaExistePipe implements PipeTransform {

  constructor(
    @InjectRepository(Tarea) private readonly tareaRepository: Repository<Tarea>
  ) {}

  async transform(idTarea: any, metadata: ArgumentMetadata) {
    let existe : boolean = await this.tareaRepository.existsBy({
      id: idTarea
    });
    if (!existe) {
      throw new BadRequestException('La tarea no existe');
    }
    return idTarea;
  }
}
