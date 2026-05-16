import { Test, TestingModule } from '@nestjs/testing';
import { BrandService } from './brand.service';

describe('BrandService', () => {
  let service: BrandService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BrandService],
    }).compile();

    service = module.get<BrandService>(BrandService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all brands', () => {

    const brands = service.findAll();
    expect(brands.length).toBeGreaterThan(0);
    
  });

  it('should create a brand', () => {

    const newBrand = {
      brandName: 'Electronics',
      description: 'Electronic devices',
    };

    const created =
      service.create(newBrand);

    expect(created.brandName)
      .toBe('Electronics');
  });

  it('should find one brand', () => {

    const brand = service.findOne(1);

    expect(brand.id).toBe(1);
  });

  it('should throw error if brand not found', () => {

    expect(() =>
      service.findOne(999),
    ).toThrow();
  });
});
