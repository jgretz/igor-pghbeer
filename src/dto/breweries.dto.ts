import {Body} from '@jgretz/igor-data';
import {Breweries} from '../entities';

export interface FindBreweriesDto extends Body, Partial<Breweries> {
  name?: string;
}

export interface CreateBreweriesDto extends Body, Partial<Breweries> {
  name: string;
}

export interface UpdateBreweriesDto extends Body, Partial<Breweries> {
  id: number;
  name?: string;
}
