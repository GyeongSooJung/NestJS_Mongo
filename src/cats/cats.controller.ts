import { Controller, Get, Param, Post, Delete, Patch, Body, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './schemas/cat.schema';


@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Get()
    async getAll(): Promise<Cat[]> {
        return await this.catsService.getAll();
    }

    @Get('/:id')
    async getOne(@Param('id') catId: number): Promise<Cat[]> {
        console.log(catId)
        return await this.catsService.getOne(catId);
    }

    @Post()
    async create(@Body() catsData : CreateCatDto) {
        return await this.catsService.create(catsData);
    }

    @Patch('/:id')
    async update(@Param('id') catId: number, @Body() updateData: UpdateCatDto) {
        return this.catsService.update(catId,updateData)
    }

    @Delete('/:id')
    async delete(@Param('id') catId: number) {
        return this.catsService.delete(catId);
    }

}

