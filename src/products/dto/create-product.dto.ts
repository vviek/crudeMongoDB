import { IsNotEmpty, IsNumber, IsArray, IsOptional, IsMongoId, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  stock: number;

  @IsOptional()
  @IsArray()
  categories?: string[];

  @IsMongoId()
  createdBy: string;

  @IsOptional()
  isAvailable?: boolean;
}