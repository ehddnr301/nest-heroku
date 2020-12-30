import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(readonly modelService: ModelService) {}

  @Get('all')
  getAll() {
    return this.modelService.getAll();
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<boolean> {
    try {
      await this.modelService.create(createUserDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
