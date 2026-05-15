import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

  private products = [
    { id: 1, productName: 'Iphone 14 Pro Max', price: 12000000, description: 'This is Iphone 14 Pro Max' },
    { id: 2, productName: 'Iphone 14 Pro', price: 10000000, description: 'This is Iphone 14 Pro' }
  ];

  create(createProductDto: CreateProductDto) {
    const newProduct = {
      id: this.products.length + 1,
      ...createProductDto,
      description: createProductDto.description ?? ''
    };
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: number) {
   const product = this.products.find(product => product.id === id);
   if(!product) {
    throw new NotFoundException(`Product not found`);
   }
   return product;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.products.find(product => product.id === id);
    if(!product) {
      throw new NotFoundException(`Product not found`);
    }
    Object.assign(product, updateProductDto);
    return product;
  }

  remove(id: number) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if(productIndex === -1) {
      throw new NotFoundException(`Product not found`);
    }
    const deletedProduct = this.products[productIndex];
    this.products.splice(productIndex, 1);
    return deletedProduct; 
  }
}
