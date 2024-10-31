import { Body, Controller, Param, Patch } from '@nestjs/common';
import { ValidacionEmpleadoExistePipe } from '../pipe/validacion-empleado-existe.pipe';
import { ValidacionEmpleadosExistenPipe } from '../pipe/validacion-empleados-existen.pipe';
import { ValidacionTareaExistePipe } from '../pipe/validacion-tarea-existe.pipe';
import { AsignacionService } from '../service/asignacion.service';

@Controller('asignacion')
export class AsignacionController {
  constructor(private readonly asignacionService: AsignacionService) {}

  @Patch("asignar/:idTarea")
  async asignarEmpleados(@Param("idTarea", ValidacionTareaExistePipe) idTarea : string, @Body(ValidacionEmpleadosExistenPipe) rutEmpleados : string[]) : Promise<string> {
    return await this.asignacionService.asignarEmpleados(idTarea, rutEmpleados);
  }

  @Patch("remover/:idTarea/:rutEmpleado")
  async removerEmpleado(@Param("idTarea", ValidacionTareaExistePipe) idTarea : string, @Param("rutEmpleado", ValidacionEmpleadoExistePipe) rutEmpleado : string) : Promise<string> {
    return await this.asignacionService.removerEmpleado(idTarea, rutEmpleado);
  }

}
