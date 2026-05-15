import { IsInt, IsNotEmpty, IsOptional, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(100)
    productName!: string;

    @IsInt()
    @IsNotEmpty()
    @Min(0)
    @Max(1000000000)
    price!: number;
    
    @IsOptional()
    @IsString()
    @MaxLength(1500)
    description?: string;
}
