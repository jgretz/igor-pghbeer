// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import {NestFactory} from '@nestjs/core';
import {PghBeerModule} from './pghbeer.module';

async function bootstrap() {
  const app = await NestFactory.create(PghBeerModule);
  app.startAllMicroservices();
}
bootstrap();
