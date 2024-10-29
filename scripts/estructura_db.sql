CREATE DATABASE tareas;
USE tareas;
CREATE TABLE `usuario` ( `email` VARCHAR(50) PRIMARY KEY, `clave` VARCHAR(50));

CREATE TABLE `empleado` ( `rut` VARCHAR(12) PRIMARY KEY, `nombre` VARCHAR(100), `email_usuario` VARCHAR(50) UNIQUE);

CREATE TABLE `proyecto` ( `id` INT PRIMARY KEY AUTO_INCREMENT, `nombre` VARCHAR(100), `fecha_inicio` DATE, `fecha_fin` DATE);

CREATE TABLE `tarea` (
 `id` VARCHAR(36) PRIMARY KEY,
 `descripcion` VARCHAR(500),
 `fecha_limite` DATE,
 `estado` ENUM('pendiente','en progreso','completada'),
 `proyecto_id` INT
);

CREATE TABLE `tarea_empleado`( `tarea_id` VARCHAR(36), `rut_empleado` VARCHAR(12), PRIMARY KEY (`tarea_id`, `rut_empleado`));

ALTER TABLE `empleado` ADD FOREIGN KEY (`email_usuario`) REFERENCES `usuario` (`email`);
ALTER TABLE `tarea` ADD FOREIGN KEY (`proyecto_id`) REFERENCES `proyecto` (`id`);
ALTER TABLE `tarea_empleado` ADD FOREIGN KEY (`tarea_id`) REFERENCES `tarea` (`id`);
ALTER TABLE `tarea_empleado` ADD FOREIGN KEY (`rut_empleado`) REFERENCES `empleado` (`rut`);