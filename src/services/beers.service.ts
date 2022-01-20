import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Beers} from '../entities';

import {CreateBeersDto, FindBeersDto, UpdateBeersDto} from '../dto';

@Injectable()
export class BeersService extends TypeORMService<
  Beers,
  FindBeersDto,
  CreateBeersDto,
  UpdateBeersDto
> {
  constructor(
    @InjectRepository(Beers)
    beers: Repository<Beers>,
  ) {
    super(beers);
  }
}
