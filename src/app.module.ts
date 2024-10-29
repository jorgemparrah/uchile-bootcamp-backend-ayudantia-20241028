import { Module } from '@nestjs/common';
import { OrmModule } from './orm/orm.module';
import { EmpleadoModule } from './empleado/empleado.module';

@Module({
  imports: [OrmModule, EmpleadoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
