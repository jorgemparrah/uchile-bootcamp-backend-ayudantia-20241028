import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEmpleadoDto {

  @ApiProperty({ example: '12.345.678-9', description: 'Rut del empleado' })
  @IsString({ message: 'El rut debe ser un string' })
  rut: string;

  @ApiProperty({ example: 'Juan Perez', description: 'Nombre del empleado' })
  nombre: string;

  @ApiProperty({ example: 'ejemplo@prueba.com', description: 'Email del empleado' })
  email: string;

  @ApiProperty({ example: '123456', description: 'Contraseña de usuario del empleado' })
  clave: string;

}
