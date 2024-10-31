import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ProyectosModule } from './proyectos/proyectos.module';
import { AsignacionModule } from './asignacion/asignacion.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('Descripcion de la API')
    .setVersion('1.0')
    .addTag('Ejemplos')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [ EmpleadoModule, ProyectosModule, AsignacionModule ]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PUERTO_NESTJS);
}
bootstrap();
