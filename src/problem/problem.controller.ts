import { Controller, Get } from '@nestjs/common';
import { ProblemService } from './problem.service';

@Controller('problem')
export class ProblemController {
  constructor(readonly problemService: ProblemService) {}

  @Get('all')
  getAll() {
    return this.problemService.getAll();
  }
}
