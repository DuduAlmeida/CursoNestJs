import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './coffees.service';
import { CoffeesController } from './coffees.controller';

@Module({
    controllers: [CoffeesController],
    providers: [CoffeesService],
    imports: [TypeOrmModule.forFeature([Coffee, Flavor])]
})
export class CoffeesModule {}
