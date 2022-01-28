import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {TypeORMService} from '@jgretz/igor-data';

import {Users} from '../entities';

import {CreateUsersDto, FindUsersDto, UpdateUsersDto} from '../dto';

@Injectable()
export class UsersService extends TypeORMService<
  Users,
  FindUsersDto,
  CreateUsersDto,
  UpdateUsersDto
> {
  constructor(
    @InjectRepository(Users)
    Users: Repository<Users>,
  ) {
    super(Users);
  }
}
