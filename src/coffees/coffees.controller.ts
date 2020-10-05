import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {

    @Get()
    findAll(@Res() response) {
        response.status(200).send('This action returns all coffees');
    }

    @Get(':id')
    // findOne( @Param() params: { id: string }) {
    //     return `This action returns #${params.id} coffees`;
    // }
    findOne( @Param('id') id: string) {
        return `This action returns #${id} coffees`;
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body){
        return body;
    }
}