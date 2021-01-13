import { IsNumber } from 'class-validator';

export class CreateProblemDto {
  @IsNumber()
  problemNumber: number;
}
