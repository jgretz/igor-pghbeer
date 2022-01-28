import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Events} from '../entities';

import {CreateEventsDto, FindEventsDto, UpdateEventsDto} from '../dto';

@Injectable()
export class EventsService extends TypeORMService<
  Events,
  FindEventsDto,
  CreateEventsDto,
  UpdateEventsDto
> {
  constructor(
    @InjectRepository(Events)
    Events: Repository<Events>,
  ) {
    super(Events);
  }
}
