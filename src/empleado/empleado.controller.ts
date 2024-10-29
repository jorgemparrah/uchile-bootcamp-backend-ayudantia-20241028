import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
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
  async create(@Body(ValidacionCrearEmpleadoPipe) createEmpleadoDto: CreateEmpleadoDto) : Promise<GetEmpleadoDto> {
    return await this.empleadoService.create(createEmpleadoDto);
  }

  @ApiResponse({ status: 201, type: GetEmpleadoDto })
  @ApiBody({ type: CredencialesDto })
  @Post("login")
  async login(@Body() credencialesDto: CredencialesDto) : Promise<GetEmpleadoDto> {
    return await this.empleadoService.login(credencialesDto);
  }
  /*
  @Get()
  findAll() {
    return this.empleadoService.findAll();
  }

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
