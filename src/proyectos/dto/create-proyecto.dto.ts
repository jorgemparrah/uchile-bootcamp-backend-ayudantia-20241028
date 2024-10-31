import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class CreateProyectoDto {

  @ApiProperty({ example: 'E-commerce venta de repuestos de automovil', description: 'Nombre del proyecto' })
  @IsString({ message: 'El nombre debe ser un string' })
  nombre: string;

  @ApiProperty({ example: '2020-10-31', description: 'Fecha de inicio del proyecto' })
  @IsDateString({ strictSeparator: true, strict: true }, { message: 'La fecha de inicio debe ser una fecha' })
  fechaInicio: string;

  @ApiProperty({ example: '2020-10-31', description: 'Fecha de fin del proyecto' })
  @IsDateString({ strictSeparator: true, strict: true }, { message: 'La fecha de fin debe ser una fecha' })
  fechaFin: string;

}
