import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProblemDto } from './dtos/create-problem.dto';
import { ProblemService } from './problem.service';

@Controller('problem')
export class ProblemController {
  constructor(readonly problemService: ProblemService) {}

  @Get('all')
  getAll() {
    return this.problemService.getAll();
  }

  // * 문제 생성
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

  // * 문제 갯수
  @Get('/count/:lang')
  getProbelmCount(@Param('lang') language: string) {
    try {
      return this.problemService.getProbelmCount(language);
    } catch (e) {
      return e;
    }
  }

  // * 단일 문제
  @Get('/getOne/:id')
  getOne(@Param('id') problemId: number) {
    try {
      return this.problemService.getOne(problemId);
    } catch (e) {
      return e;
    }
  }

  // * id array를 받아 문제 리턴
  @Get('/getWrongs')
  getWrongProblems(@Body('ids') problemIds: number[]) {
    try {
      return this.problemService.getWrongProblems(problemIds);
    } catch (e) {
      return e;
    }
  }

  // * 언어별 이론
  @Get('/theory/:lang')
  async getTheory(@Param('lang') language: string) {
    try {
      return this.problemService.getHeaderTheory(language);
    } catch (e) {
      return e;
    }
  }

  // * 실제 문제
  @Get('/theory/detail/:lang')
  async getTheoryDetail(
    @Query('category') category: string,
    @Param('lang') language: string,
  ) {
    try {
      return this.problemService.getTheoryDetail(category, language);
    } catch (e) {
      return e;
    }
  }

  // * 언어별 문제
  @Get('/question/:lang')
  async getProblem(@Param('lang') language: string) {
    try {
      return this.problemService.getHeaderProblem(language);
    } catch (e) {
      return e;
    }
  }

  // * 실제 문제
  @Get('/question/detail/:lang')
  async getQuestionDetail(
    @Query('category') category: string,
    @Param('lang') language: string,
  ) {
    try {
      return this.problemService.getQuestionDetail(category, language);
    } catch (e) {
      return e;
    }
  }

  // * 문제 삭제
  // @Delete('remove/:id')
  // removeAll(@Param('id') problemId: number): boolean {
  //   try {
  //     this.problemService.removeOne(problemId);
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }
}
