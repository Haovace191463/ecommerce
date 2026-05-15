import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateCategoryDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    categoryName!: string;

    @IsString()
    @IsOptional()
    @MaxLength(1500)
    description?: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}