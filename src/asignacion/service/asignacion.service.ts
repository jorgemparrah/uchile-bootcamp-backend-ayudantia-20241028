import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from 'src/orm/entity/empleado.entity';
import { Tarea } from 'src/orm/entity/tarea.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class AsignacionService {

  constructor(
    @InjectRepository(Tarea) private readonly tareaRepository: Repository<Tarea>,
    @InjectRepository(Empleado) private readonly empleadoRepository: Repository<Empleado>
  ) {}

  async asignarEmpleados(idTarea: string, rutEmpleados : string[]) : Promise<string> {
    const tarea : Tarea = await this.tareaRepository.findOne({
      where: {
        id: idTarea,
      },
      relations: {
        responsables: true
      }
    });
    const empleados : Empleado[] = await this.empleadoRepository.findBy({
      rut: In(rutEmpleados)
    });
    tarea.responsables = empleados;
    await this.tareaRepository.save(tarea);
    return idTarea;
  }

  async removerEmpleado(idTarea: string, rutEmpleado : string) : Promise<string> {
    const tarea : Tarea = await this.tareaRepository.findOne({
      where: {
        id: idTarea,
      },
      relations: {
        responsables: true
      }
    });
    const existe = tarea.responsables.some(e => e.rut == rutEmpleado);
    if (!existe) {
      throw new BadRequestException('El empleado no está asignado a la tarea');
    }
    const empleadosAsignados = tarea.responsables.filter(e => e.rut != rutEmpleado);
    tarea.responsables = empleadosAsignados;
    await this.tareaRepository.save(tarea);
    return idTarea;
  }
  /*
  findAll() {
    return `This action returns all proyectos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} proyecto`;
  }

  update(id: number, updateProyectoDto: UpdateProyectoDto) {
    return `This action updates a #${id} proyecto`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyecto`;
  }
    */
}
