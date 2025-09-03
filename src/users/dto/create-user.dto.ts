import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsEnum, Min, Max } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  @Min(0)
  @Max(120)
  age: number;

  @IsOptional()
  @IsEnum(['user', 'admin'])
  role?: string;

  @IsOptional()
  isActive?: boolean;
}