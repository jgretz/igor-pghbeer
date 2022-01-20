import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {CommandController} from '@jgretz/igor-data-microservice';
import {PGHBEER} from '../Types';

@Controller()
export class PghBeerCommandController extends CommandController {
  constructor(rabbit: RabbitMqService) {
    super(rabbit, PGHBEER, {});
  }
}
