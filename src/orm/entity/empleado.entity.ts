import { Column, Entity, JoinColumn, ManyToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Tarea } from "./tarea.entity";

@Entity({ name: 'empleado' })
export class Empleado {

  @PrimaryColumn({ name: 'rut' })
  rut: string;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'email_usuario' })
  emailUsuario: string;

  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'email_usuario' })
  usuario: Usuario;

  @ManyToMany(() => Tarea, t => t.responsables)
  tareas: Tarea[];

}
