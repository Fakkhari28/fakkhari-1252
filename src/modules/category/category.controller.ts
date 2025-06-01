import { Controller, Get } from '@nestjs/common';
import { get } from 'axios';
import { Category } from 'src/entities/category.entity';

@Controller('category')
export class CategoryController {
    @Get()
    findAll(){
        return 'Category list';
    }
}