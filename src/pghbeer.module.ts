import {Module} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {generateDatabaseImport} from '@jgretz/igor-data';
import {PghBeerCommandController, PghBeerCrudController} from './controllers';
import {
  BeersService,
  BreweriesService,
  EventBeerListService,
  EventsService,
  StatsService,
  StylesService,
  UsersService,
} from './services';
import {Beers, Breweries, Eventbeerlist, Events, Stats, Styles, Users} from './entities';

@Module({
  imports: [
    ...generateDatabaseImport(
      [Beers, Breweries, Eventbeerlist, Events, Stats, Styles, Users],
      process.env.PGHBEER_DB_URL,
    ),
  ],
  controllers: [PghBeerCommandController, PghBeerCrudController],
  providers: [
    RabbitMqService,
    BeersService,
    BreweriesService,
    EventBeerListService,
    EventsService,
    StatsService,
    StylesService,
    UsersService,
  ],
})
export class PghBeerModule {}
