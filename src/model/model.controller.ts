import { Controller, Get } from '@nestjs/common';
import { ModelService } from './model.service';

@Controller('model')
export class ModelController {
  constructor(readonly modelService: ModelService) {}

  @Get('all')
  getAll() {
    return this.modelService.getAll();
  }
}
