import { NestFactory } from '@nestjs/core';
import { VeveQryApiModule } from './veve-qry-api.module';

async function bootstrap() {
  const app = await NestFactory.create(VeveQryApiModule);
  await app.listen(3000);
}
bootstrap();
