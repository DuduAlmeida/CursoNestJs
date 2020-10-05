import { Flavor } from './flavor.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()               //sql table === 'coffee'
// @Entity('coffees')   //sql table === 'coffees'
export class Coffee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    brand: string;

    @JoinTable()
    @ManyToMany(
        type => Flavor,
        (flavor) => flavor.coffees,
        {
            cascade: true,  // or optionally just insert or update ['insert']
        }
        )
    flavors: Flavor[];
}