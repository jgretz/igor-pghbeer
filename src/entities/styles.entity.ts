import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Styles extends BaseEntity {
  @Column()
  name: string;
}
