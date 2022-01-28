import {Body} from '@jgretz/igor-data';
import {Styles} from '../entities';

export interface FindStylesDto extends Body, Partial<Styles> {
  name?: string;
}

export interface CreateStylesDto extends Body, Partial<Styles> {
  name: string;
}

export interface UpdateStylesDto extends Body, Partial<Styles> {
  id: number;
  name?: string;
}
