import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Stats} from '../entities';

import {CreateStatsDto, FindStatsDto, UpdateStatsDto} from '../dto';

@Injectable()
export class StatsService extends TypeORMService<
  Stats,
  FindStatsDto,
  CreateStatsDto,
  UpdateStatsDto
> {
  constructor(
    @InjectRepository(Stats)
    Stats: Repository<Stats>,
  ) {
    super(Stats);
  }
}
