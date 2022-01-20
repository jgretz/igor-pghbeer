import {Column, Entity} from 'typeorm';
import {BaseEntity} from '@jgretz/igor-data';

@Entity()
export class Beers extends BaseEntity {
  @Column()
  name: string;

  @Column()
  abv: number;

  @Column()
  brewery_id: number;

  @Column()
  style_id: number;
}
