USE tareas;
INSERT INTO usuario (email, clave) VALUES
('juan.perez@email.com', 'clave123'), ('ana.gomez@email.com', 'password456'), ('maria.lopez@email.com', 'qwerty789'), ('pedro.sanchez@email.com', 'abc123'), ('lucia.morales@email.com', 'clave456'), ('carlos.rojas@email.com', 'password789'), ('sofia.martinez@email.com', 'clave999'), ('diego.garcia@email.com', 'mypassword'), ('laura.torres@email.com', 'test123'), ('andres.vargas@email.com', 'test456');

INSERT INTO empleado (rut, nombre, email_usuario) VALUES
('12.345.678-9', 'Juan Pérez', 'juan.perez@email.com'),('23.456.789-0', 'Ana Gómez', 'ana.gomez@email.com'),('34.567.890-1', 'María López', 'maria.lopez@email.com'),('45.678.901-2', 'Pedro Sánchez', 'pedro.sanchez@email.com'),('56.789.012-3', 'Lucía Morales', 'lucia.morales@email.com'),('67.890.123-4', 'Carlos Rojas', 'carlos.rojas@email.com'),('78.901.234-5', 'Sofía Martínez', 'sofia.martinez@email.com'),('89.012.345-6', 'Diego García', 'diego.garcia@email.com'),('90.123.456-7', 'Laura Torres', 'laura.torres@email.com'),('10.234.567-8', 'Andrés Vargas', 'andres.vargas@email.com');

INSERT INTO proyecto (nombre, fecha_inicio, fecha_fin) VALUES
('Proyecto Alfa', '2024-01-01', '2024-06-30'),('Proyecto Beta', '2024-07-01', '2024-12-31'),('Proyecto Gamma', '2024-02-01', '2024-08-31'),('Proyecto Delta', '2024-03-01', '2024-09-30'),('Proyecto Épsilon', '2024-04-01', '2024-10-31'),('Proyecto Zeta', '2024-05-01', '2024-11-30'),('Proyecto Eta', '2024-06-01', '2024-12-31'),('Proyecto Theta', '2024-01-15', '2024-07-15'),('Proyecto Iota', '2024-02-15', '2024-08-15'),('Proyecto Kappa', '2024-03-15', '2024-09-15');

INSERT INTO tarea (id, descripcion, fecha_limite, estado, proyecto_id) VALUES
(UUID(), 'Análisis de requerimientos', '2024-03-01', 'pendiente', 1),(UUID(), 'Diseño del sistema', '2024-04-01', 'en progreso', 2),(UUID(), 'Desarrollo del frontend', '2024-05-01', 'pendiente', 3),(UUID(), 'Implementación del backend', '2024-06-01', 'en progreso', 4),(UUID(), 'Integración del sistema', '2024-07-01', 'completada', 5),(UUID(), 'Pruebas de aceptación', '2024-08-01', 'pendiente', 6),(UUID(), 'Optimización de recursos', '2024-09-01', 'en progreso', 7),(UUID(), 'Entrega del producto', '2024-10-01', 'pendiente', 8),(UUID(), 'Soporte técnico', '2024-11-01', 'completada', 9),(UUID(), 'Documentación final', '2024-12-01', 'pendiente', 10);

INSERT INTO tarea_empleado (tarea_id, rut_empleado) VALUES
((SELECT id FROM tarea LIMIT 1 OFFSET 0), '12.345.678-9'),((SELECT id FROM tarea LIMIT 1 OFFSET 1), '23.456.789-0'),((SELECT id FROM tarea LIMIT 1 OFFSET 2), '34.567.890-1'),((SELECT id FROM tarea LIMIT 1 OFFSET 3), '45.678.901-2'),((SELECT id FROM tarea LIMIT 1 OFFSET 4), '56.789.012-3'),((SELECT id FROM tarea LIMIT 1 OFFSET 5), '67.890.123-4'),((SELECT id FROM tarea LIMIT 1 OFFSET 6), '78.901.234-5'),((SELECT id FROM tarea LIMIT 1 OFFSET 7), '89.012.345-6'),((SELECT id FROM tarea LIMIT 1 OFFSET 8), '90.123.456-7'),((SELECT id FROM tarea LIMIT 1 OFFSET 9), '10.234.567-8');
