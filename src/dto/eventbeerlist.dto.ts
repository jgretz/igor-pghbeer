import {Body} from '@jgretz/igor-data';
import {Eventbeerlist} from '../entities';

export interface FindEventBeerListDto extends Body, Partial<Eventbeerlist> {
  event_id?: number;
  beer_id?: number;
}

export interface CreateEventBeerListDto extends Body, Partial<Eventbeerlist> {
  event_id: number;
  beer_id: number;
}

export interface UpdateEventBeerListDto extends Body, Partial<Eventbeerlist> {
  id: number;
  event_id?: number;
  beer_id?: number;
}
