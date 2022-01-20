import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Breweries extends BaseEntity {
  @Column()
  name: string;
}
