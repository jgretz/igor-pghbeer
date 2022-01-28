import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Breweries} from '../entities';

import {CreateBreweriesDto, FindBreweriesDto, UpdateBreweriesDto} from '../dto';

@Injectable()
export class BreweriesService extends TypeORMService<
  Breweries,
  FindBreweriesDto,
  CreateBreweriesDto,
  UpdateBreweriesDto
> {
  constructor(
    @InjectRepository(Breweries)
    Breweries: Repository<Breweries>,
  ) {
    super(Breweries);
  }
}
