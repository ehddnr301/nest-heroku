import { IsArray } from 'class-validator';

export class GetProblemsDto {
  @IsArray()
  problemIds: number[];
}
