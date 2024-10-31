import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { GetEmpleadoDto } from './dto/get-empleado.dto';
import { EmpleadoService } from './empleado.service';
import { ValidacionCrearEmpleadoPipe } from './pipe/validacion-crear-empleado.pipe';
import { CredencialesDto } from './dto/credenciales.dto';

@Controller('empleado')
export class EmpleadoController {

  constructor(
    private readonly empleadoService: EmpleadoService
  ) {}

  @ApiResponse({ status: 201, type: GetEmpleadoDto })
  @ApiBody({ type: CreateEmpleadoDto })
  @Post()
  // async create(@Param('id', ValidacionCrearEmpleadoPipe) id: string) .....
  async create(@Body(ValidacionCrearEmpleadoPipe) createEmpleadoDto: CreateEmpleadoDto) : Promise<GetEmpleadoDto> {
    return await this.empleadoService.create(createEmpleadoDto);
  }

  @ApiResponse({ status: 201, type: GetEmpleadoDto })
  @ApiBody({ type: CredencialesDto })
  @Post("login")
  async login(@Body() credencialesDto: CredencialesDto) : Promise<GetEmpleadoDto> {
    return await this.empleadoService.login(credencialesDto);
  }

  @ApiQuery({ name: 'rut', required: false })
  @ApiQuery({ name: 'nombre', required: false })
  @Get()
  async findAll(@Query("rut") rut: string, @Query("nombre") nombre: string): Promise<GetEmpleadoDto[]> {
    return await this.empleadoService.findAll(rut, nombre);
  }

  /*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empleadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpleadoDto: UpdateEmpleadoDto) {
    return this.empleadoService.update(+id, updateEmpleadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empleadoService.remove(+id);
  }
  */
}
