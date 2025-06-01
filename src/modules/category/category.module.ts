import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoriesController } from './category.controller';
import { Category } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
