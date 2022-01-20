import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Stats extends BaseEntity {
  @Column()
  date: Date;

  @Column()
  opinion: number;

  @Column()
  beer_id: number;

  @Column()
  user_id: number;

  @Column()
  event_id: number;
}
