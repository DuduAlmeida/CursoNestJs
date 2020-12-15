import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Event } from './../events/entities/event.entity';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';

class MockCoffeeService { }
@Module({
    controllers: [CoffeesController],
    imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
    providers: [{ provide: CoffeesService, useValue: new MockCoffeeService() }],
    exports: [CoffeesService],
})
export class CoffeesModule { }
