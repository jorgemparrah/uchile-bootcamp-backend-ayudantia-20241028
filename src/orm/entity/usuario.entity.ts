import { Column, Entity, OneToOne, PrimaryColumn } from "typeorm";
import { Empleado } from "./empleado.entity";

@Entity({ name: 'usuario' })
export class Usuario {

  @PrimaryColumn({ name: 'email' })
  email: string;

  @Column({ name: 'clave' })
  clave: string;

  @OneToOne(() => Empleado, e => e.usuario)
  empleado: Empleado;

}
