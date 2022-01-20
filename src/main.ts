import {NestFactory} from '@nestjs/core';
import {PghBeerModule} from './pghbeer.module';

export async function bootstrap() {
  const app = await NestFactory.create(PghBeerModule);
  app.startAllMicroservices();
}
