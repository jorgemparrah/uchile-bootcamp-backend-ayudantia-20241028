import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from 'src/orm/entity/empleado.entity';
import { Usuario } from 'src/orm/entity/usuario.entity';
import { Like, Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UsuarioMapper } from './mapper/usuario.mapper';
import { GetEmpleadoDto } from './dto/get-empleado.dto';
import { EmpleadoMapper } from './mapper/empleado.mapper';
import { CredencialesDto } from './dto/credenciales.dto';

@Injectable()
export class EmpleadoService {

  constructor(
    @InjectRepository(Empleado) private readonly empleadoRepository: Repository<Empleado>,
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>
  ) {}

  async create(createEmpleadoDto: CreateEmpleadoDto) : Promise<GetEmpleadoDto> {
    const usuario : Usuario = UsuarioMapper.dtoToEntity(createEmpleadoDto);
    await this.usuarioRepository.save(usuario);
    const empleado : Empleado = EmpleadoMapper.dtoToEntity(createEmpleadoDto);
    const empleadoGuardado = await this.empleadoRepository.save(empleado);
    return EmpleadoMapper.entityToDto(empleadoGuardado);
  }

  async login(dto: CredencialesDto): Promise<GetEmpleadoDto> {
    const usuario : Usuario = await this.usuarioRepository.findOne({
      where: {
        email: dto.email
      },
      relations: {
        empleado: true
      }
    });
    if (usuario && usuario.clave === dto.clave) {
      return EmpleadoMapper.entityToDto(usuario.empleado);
    }
    throw new UnauthorizedException('Usuario y/o contraseña incorrectos');
  }

  async findAll(rut : string, nombre: string): Promise<GetEmpleadoDto[]> {
    const valoresWhere = {};

    if (rut && rut.length > 0) {
      valoresWhere["rut"] = Like(rut + "%");
    }

    if (nombre && nombre.length > 0) {
      valoresWhere["nombre"] = Like("%" + nombre);
    }

    console.log(valoresWhere)
    const empleados : Empleado[] = await this.empleadoRepository.find({
      where: valoresWhere
    });
    return EmpleadoMapper.entityListToDtoList(empleados);
  }
  /*

  findOne(id: number) {
    return `This action returns a #${id} empleado`;
  }

  update(id: number, updateEmpleadoDto: UpdateEmpleadoDto) {
    return `This action updates a #${id} empleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} empleado`;
  }
  */
}
