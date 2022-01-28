import {Controller} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {CrudController} from '@jgretz/igor-data-microservice';
import {PGHBEER} from '../Types';
import {
  BeersService,
  BreweriesService,
  EventBeerListService,
  EventsService,
  StatsService,
  StylesService,
  UsersService,
} from '../services';

@Controller()
export class PghBeerCrudController extends CrudController {
  constructor(
    rabbit: RabbitMqService,
    beersService: BeersService,
    breweriesService: BreweriesService,
    eventBeerListService: EventBeerListService,
    eventsService: EventsService,
    statsService: StatsService,
    stylesService: StylesService,
    usersService: UsersService,
  ) {
    super(rabbit, PGHBEER, {
      beers: beersService,
      breweries: breweriesService,
      eventbeerlist: eventBeerListService,
      events: eventsService,
      stats: statsService,
      styles: stylesService,
      users: usersService,
    });
  }
}
