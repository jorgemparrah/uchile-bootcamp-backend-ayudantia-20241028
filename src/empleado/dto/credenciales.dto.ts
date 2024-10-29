import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class CredencialesDto {

  @ApiProperty({ example: 'ejemplo@prueba.com', description: 'Email del usuario' })
  @IsEmail({ }, { message: 'El email debe ser un email válido' })
  email: string;

  @ApiProperty({ example: '123456', description: 'Contraseña del usuario' })
  clave: string;

}
