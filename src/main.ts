import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { EmpleadoModule } from './empleado/empleado.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API example')
    .setDescription('Descripcion de la API')
    .setVersion('1.0')
    .addTag('Ejemplos')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [ EmpleadoModule ]
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PUERTO_NESTJS);
}
bootstrap();
