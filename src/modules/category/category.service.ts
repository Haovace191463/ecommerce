import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateCategoryDto } from "./dto/create-category";
import { UpdateCategoryDto } from "./dto/update-category";

@Injectable()
export class CategoryService {
    private category = [
    { id: 1, categoryName: 'Smartphones', description: 'Electronic devices and accessories', isActive: true },
    { id: 2, categoryName: 'Laptops', description: 'Electronic devices and accessories', isActive: true }
  ];

    create(createCategoryDto: CreateCategoryDto) { 
        const newCategory = {
            id: this.category.length + 1,
            ...createCategoryDto,
            description: createCategoryDto.description ?? '',
            isActive: createCategoryDto.isActive ?? true
        }
        this.category.push(newCategory);
        return newCategory;
    }

    findAll() {
        return this.category;
    }

    findOne(id: number) {
        const category = this.category.find(cat => cat.id === id);
        if (!category) {
            throw new NotFoundException(`Category not found`);
        }
        return category;
    }

    update(id: number, updateCategoryDto: UpdateCategoryDto) {
        const category = this.category.find(cat => cat.id === id);
        if (!category) {
            throw new NotFoundException(`Category not found`);
        }
        Object.assign(category, updateCategoryDto);
        return category;
    }

    remove(id: number) {
        const categoryIndex = this.category.findIndex(cat => cat.id === id);
        if (categoryIndex === -1) {
            throw new NotFoundException(`Category not found`);
        }   
        const deletedCategory = this.category[categoryIndex];
        this.category.splice(categoryIndex, 1);
        return deletedCategory;
    }
}