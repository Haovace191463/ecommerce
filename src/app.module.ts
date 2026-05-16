import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { BrandModule } from './modules/brand/brand.module';

@Module({
  imports: [ProductModule, CategoryModule, BrandModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
