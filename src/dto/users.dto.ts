import {Body} from '@jgretz/igor-data';
import {Users} from '../entities';

export interface FindUsersDto extends Body, Partial<Users> {
  name?: string;
  email?: string;
  webuserid?: string;
}

export interface CreateUsersDto extends Body, Partial<Users> {
  name: string;
  email: string;
  webuserid: string;
}

export interface UpdateUsersDto extends Body, Partial<Users> {
  id: number;
  name?: string;
  email?: string;
  webuserid?: string;
}
