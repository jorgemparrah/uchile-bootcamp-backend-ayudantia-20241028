import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Proyecto } from "./proyecto.entity";
import { Empleado } from "./empleado.entity";

@Entity({ name: 'tarea' })
export class Tarea {

  @PrimaryColumn({ name: 'id' })
  id: string;
  
  @Column({ name: 'descripcion' })
  descripcion: string;
  
  @Column({ name: 'fecha_limite' })
  fecha_limite: Date;
  
  @Column({ name: 'estado' })
  estado: string;
  
  @Column({ name: 'proyecto_id' })
  idProyecto: number;

  @ManyToOne(() => Proyecto)
  @JoinColumn({ name: 'proyecto_id' })
  proyecto: Proyecto;

  @ManyToMany(() => Empleado)
  @JoinTable({
    name: 'tarea_empleado',
    joinColumn: { name: 'tarea_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'rut_empleado', referencedColumnName: 'rut' }
  })
  responsables: Empleado[];

}
