import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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
      return e;
    }
  }

  @Get('/theory/:lang')
  async getTheory(@Param('lang') language: string) {
    try {
      return this.problemService.getTheory(language);
    } catch (e) {
      return e;
    }
  }

  // * 문제 삭제
  @Delete('remove/:id')
  removeAll(@Param('id') problemId: number): boolean {
    try {
      this.problemService.removeOne(problemId);
      return true;
    } catch {
      return false;
    }
  }
}
