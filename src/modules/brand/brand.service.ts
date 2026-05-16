import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Injectable()
export class BrandService {
   private brands = [
    { id: 1, brandName: 'Apple', description: 'Electronic devices and accessories', isActive: true },
    { id: 2, brandName: 'MSI', description: 'Apparel and fashion items', isActive: true }
  ];
  create(createBrandDto: CreateBrandDto) {
    const newBrand = {
      id: this.brands.length + 1,
      ...createBrandDto,
      description: createBrandDto.description ?? '',
      isActive: createBrandDto.isActive ?? true
    }
    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find(brand => brand.id === id);
   if(!brand) {
    throw new Error('Brand not found');
   }
    return brand;
  }

  update(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = this.brands.find(brands => brands.id === id);
    if(!brand) {
      throw new Error('Brand not found');
    }
    Object.assign(brand, updateBrandDto);
    return brand;
  }

  remove(id: number) {
    const brandIndex = this.brands.findIndex(brands => brands.id === id);
    if(brandIndex === - 1){
      throw new Error('Brand not found');
    }
    const deletedBrand = this.brands[brandIndex];
    this.brands.splice(brandIndex, 1);
    return deletedBrand
  }
}
