import { ApiProperty } from "@nestjs/swagger";

export class GetProyectoDto {

  @ApiProperty({ example: 1, description: 'Identificador del proyecto' })
  id: number;

  @ApiProperty({ example: 'E-commerce venta de repuestos de automovil', description: 'Nombre del proyecto' })
  nombre: string;

  @ApiProperty({ example: '31-10-2020', description: 'Fecha de inicio del proyecto' })
  fechaInicio: string;

  @ApiProperty({ example: '31-10-2020', description: 'Fecha de fin del proyecto' })
  fechaFin: string;

}
