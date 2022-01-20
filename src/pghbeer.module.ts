import {Module} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {generateDatabaseImport} from '@jgretz/igor-data';
import {PghBeerCommandController, PghBeerCrudController} from './controllers';
import {BeersService} from './services';
import {Beers} from './entities';

@Module({
  imports: [...generateDatabaseImport([Beers], process.env.PGHBEER_DB_URL)],
  controllers: [PghBeerCommandController, PghBeerCrudController],
  providers: [RabbitMqService, BeersService],
})
export class PghBeerModule {}
