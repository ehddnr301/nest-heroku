import { IsString } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  question: string;

  @IsString()
  code?: string;

  @IsString()
  option?: string;

  @IsString()
  answer: string;
}
