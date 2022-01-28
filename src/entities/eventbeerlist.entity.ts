import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Eventbeerlist extends BaseEntity {
  @Column()
  event_id: number;

  @Column()
  beer_id: number;
}
