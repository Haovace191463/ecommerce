import { Test, TestingModule } from '@nestjs/testing';
import { ProductService } from './product.service';

describe('ProductService', () => {

  let service: ProductService;

  beforeEach(async () => {

    const module: TestingModule =
      await Test.createTestingModule({
        providers: [ProductService],
      }).compile();

    service =
      module.get<ProductService>(
        ProductService,
      );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all products', () => {

    const products = service.findAll();

    expect(products.length)
      .toBeGreaterThan(0);
  });

  it('should create a product', () => {

    const newProduct = {
      productName: 'Macbook Pro',
      price: 50000000,
      description: 'Apple laptop',
    };

    const created =
      service.create(newProduct);

    expect(created.productName)
      .toBe('Macbook Pro');
  });

  it('should find one product', () => {

    const product = service.findOne(1);

    expect(product.id).toBe(1);
  });

  it('should throw error if product not found', () => {

    expect(() =>
      service.findOne(999),
    ).toThrow();
  });
});