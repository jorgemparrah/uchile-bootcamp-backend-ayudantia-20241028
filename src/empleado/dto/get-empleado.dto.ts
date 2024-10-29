import { ApiProperty } from "@nestjs/swagger";

export class GetEmpleadoDto {

  @ApiProperty({ description: 'Rut del empleado' })
  rut: string;

  @ApiProperty({ description: 'Nombre del empleado' })
  nombre: string;

  @ApiProperty({ description: 'Email del empleado' })
  email: string;

}
