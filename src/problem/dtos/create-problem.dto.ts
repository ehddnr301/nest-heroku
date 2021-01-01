import { IsString } from 'class-validator';

export class CreateProblem {
  @IsString()
  question: string;

  @IsString()
  code?: string;

  @IsString()
  option?: number;

  @IsString()
  answer: string;
}
