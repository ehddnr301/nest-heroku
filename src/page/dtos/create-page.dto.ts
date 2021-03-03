import { IsBoolean, IsString } from 'class-validator';

export class CreatePageDto {
  @IsBoolean()
  isBook: boolean;

  @IsString()
  title: string;

  @IsString()
  introduction: string;

  @IsString()
  imageUrl: string;

  @IsString()
  hashTag: string;

  @IsString()
  contentOrder: string;

  @IsString()
  recommendation: string;

  @IsString()
  link: string;
}
