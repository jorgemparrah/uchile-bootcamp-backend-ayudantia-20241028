import { Body, Controller, Post } from '@nestjs/common';
import { CreateProyectoDto } from '../dto/create-proyecto.dto';
import { ProyectosService } from '../service/proyectos.service';
import { GetProyectoDto } from '../dto/get-proyecto.dto';

@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Post()
  async create(@Body() createProyectoDto: CreateProyectoDto) : Promise<GetProyectoDto> {
    return await this.proyectosService.create(createProyectoDto);
  }

  /*
  @Get()
  findAll() {
    return this.proyectosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectoDto: UpdateProyectoDto) {
    return this.proyectosService.update(+id, updateProyectoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proyectosService.remove(+id);
  }
    */
}
