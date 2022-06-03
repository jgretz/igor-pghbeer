import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Events extends BaseEntity {
  @Column()
  name: string;

  @Column()
  date: Date;
}
