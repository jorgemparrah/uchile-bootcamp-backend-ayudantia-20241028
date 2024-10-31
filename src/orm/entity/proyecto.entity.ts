import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Tarea } from "./tarea.entity";

@Entity({ name: 'proyecto' })
export class Proyecto {

  @PrimaryColumn({ name: 'id', generated: true })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  @Column({ name: 'fecha_inicio' })
  fechaInicio: Date;

  @Column({ name: 'fecha_fin' })
  fechaTermino: Date;

  @OneToMany(() => Tarea, t => t.proyecto)
  tareas: Tarea[];

}
