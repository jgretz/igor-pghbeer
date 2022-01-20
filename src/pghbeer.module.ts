import {Module} from '@nestjs/common';
import {RabbitMqService} from '@jgretz/igor-rabbit';
import {generateDatabaseImport} from '@jgretz/igor-data';
import {CrudController} from './controllers';
import {BeersService} from './services';
import {Beers} from './entities';

@Module({
  imports: [...generateDatabaseImport([Beers], process.env.PGHBEER_DB_URL)],
  controllers: [CrudController],
  providers: [RabbitMqService, BeersService],
})
export class PghBeerModule {}
