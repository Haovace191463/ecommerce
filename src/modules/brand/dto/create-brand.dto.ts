import { MaxLength, MinLength, IsNotEmpty, IsString, IsOptional, IsBoolean } from "class-validator";

export class CreateBrandDto {
       @IsString()
        @IsNotEmpty()
        @MinLength(2)
        @MaxLength(100)
        brandName!: string;
    
        @IsString()
        @IsOptional()
        @MaxLength(1500)
        description?: string;
    
        @IsOptional()
        @IsBoolean()
        isActive?: boolean;
}
