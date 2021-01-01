import { IsString } from 'class-validator';

export class CreateProblemDto {
  @IsString()
  question: string;

  @IsString()
  code?: string;

  @IsString({ each: true })
  option?: string[];

  @IsString()
  answer: string;
}
