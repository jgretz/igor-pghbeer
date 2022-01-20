import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {CrudController} from '@jgretz/igor-data-microservice';
import {PGHBEER} from '../Types';
import {BeersService} from '../services';

@Controller()
export class PghBeerCrudController extends CrudController {
  constructor(rabbit: RabbitMqService, beersService: BeersService) {
    super(rabbit, PGHBEER, {
      beers: beersService,
    });
  }
}
