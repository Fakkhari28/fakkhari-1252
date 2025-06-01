import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
    create(body: CategoryDto) {
      throw new Error('Method not implemented.');
    }
    findByUser(arg0: number) {
      throw new Error('Method not implemented.');
    }
    update(arg0: number, body: Partial<CategoryDto>) {
      throw new Error('Method not implemented.');
    }
    remove(arg0: number) {
      throw new Error('Method not implemented.');
    }
    constructor(@InjectRepository(Category) private repo: Repository<Category>) {}
    findAll() {
        return this.repo.find();
    }
    
    creat(data:Partial<CategoryDto>){
        const{userId, ...rest} = data;
        const entity = this.repo.create({
            ...rest,
            user: {id: userId},
        })
        return this.repo.save(entity);
    }
}
