import { Injectable } from '@nestjs/common';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proyecto } from 'src/orm/entity/proyecto.entity';
import { ProyectoMapper } from '../mapper/proyecto.mapper';
import { GetProyectoDto } from '../dto/get-proyecto.dto';

@Injectable()
export class ProyectosService {

  constructor(
    @InjectRepository(Proyecto) private readonly proyectoRepository: Repository<Proyecto>
  ) {}

  async create(createProyectoDto: CreateProyectoDto) : Promise<GetProyectoDto> {
    const proyecto : Proyecto = ProyectoMapper.dtoToEntity(createProyectoDto);
    const proyectGuardado : Proyecto = await this.proyectoRepository.save(proyecto);
    return ProyectoMapper.entityToDto(proyectGuardado);
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
