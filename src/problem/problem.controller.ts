import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { CreateProblemDto } from './dtos/create-problem.dto';
import { ProblemService } from './problem.service';

@Controller('problem')
export class ProblemController {
  constructor(readonly problemService: ProblemService) {}

  @Get('all')
  getAll() {
    return this.problemService.getAll();
  }

  @Post('create')
  async create(@Body() createProblemDto: CreateProblemDto): Promise<boolean> {
    try {
      await this.problemService.create(createProblemDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Delete('remove/all')
  async removeAll(): Promise<boolean> {
    try {
      await this.problemService.removeAll();
      return true;
    } catch {
      return false;
    }
  }
}
