import { Test, TestingModule } from '@nestjs/testing';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoryService],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all categories', () => {

    const categories = service.findAll();
    expect(categories.length).toBeGreaterThan(0);
    
  });

  it('should create a category', () => {

    const newCategory = {
      categoryName: 'Electronics',
      description: 'Electronic devices',
    };

    const created =
      service.create(newCategory);

    expect(created.categoryName)
      .toBe('Electronics');
  });

  it('should find one category', () => {

    const category = service.findOne(1);

    expect(category.id).toBe(1);
  });

  it('should throw error if category not found', () => {

    expect(() =>
      service.findOne(999),
    ).toThrow();
  });

});
