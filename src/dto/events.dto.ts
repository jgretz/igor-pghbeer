import {Body} from '@jgretz/igor-data';
import {Events} from '../entities';

export interface FindEventsDto extends Body, Partial<Events> {
  name?: string;
}

export interface CreateEventsDto extends Body, Partial<Events> {
  name: string;
}

export interface UpdateEventsDto extends Body, Partial<Events> {
  id: number;
  name?: string;
}
