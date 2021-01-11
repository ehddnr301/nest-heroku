import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  language: string;

  @IsBoolean()
  isTheory: boolean;

  @IsString()
  category: string;

  @IsNumber()
  problemNumber: number;

  @IsString()
  question: string;

  @IsString()
  code?: string;

  @IsString()
  option?: string;

  @IsString()
  answer: string;
}
