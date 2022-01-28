import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Eventbeerlist} from '../entities';

import {CreateEventBeerListDto, FindEventBeerListDto, UpdateEventBeerListDto} from '../dto';

@Injectable()
export class EventBeerListService extends TypeORMService<
  Eventbeerlist,
  FindEventBeerListDto,
  CreateEventBeerListDto,
  UpdateEventBeerListDto
> {
  constructor(
    @InjectRepository(Eventbeerlist)
    EventBeerList: Repository<Eventbeerlist>,
  ) {
    super(EventBeerList);
  }
}
