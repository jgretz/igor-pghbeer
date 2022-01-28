import {Body} from '@jgretz/igor-data';
import {Stats} from '../entities';

export interface FindStatsDto extends Body, Partial<Stats> {
  date?: Date;
  opinion?: number;
  beer_id?: number;
  user_id?: number;
  event_id?: number;
}

export interface CreateStatsDto extends Body, Partial<Stats> {
  date: Date;
  opinion: number;
  beer_id: number;
  user_id: number;
  event_id: number;
}

export interface UpdateStatsDto extends Body, Partial<Stats> {
  id: number;
  date?: Date;
  opinion?: number;
  beer_id?: number;
  user_id?: number;
  event_id?: number;
}
