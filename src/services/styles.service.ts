import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Styles} from '../entities';

import {CreateStylesDto, FindStylesDto, UpdateStylesDto} from '../dto';

@Injectable()
export class StylesService extends TypeORMService<
  Styles,
  FindStylesDto,
  CreateStylesDto,
  UpdateStylesDto
> {
  constructor(
    @InjectRepository(Styles)
    Styles: Repository<Styles>,
  ) {
    super(Styles);
  }
}
