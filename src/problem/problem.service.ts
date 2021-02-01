import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Not, Repository } from 'typeorm';
import { CreateProblemDto } from './dtos/create-problem.dto';
import { Problem } from './entities/problem.entity';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problems: Repository<Problem>,
  ) {}

  async getAll(): Promise<Problem[]> {
    return this.problems.find();
  }

  // * id로 문제 리턴
  getOne(problemId) {
    return this.problems.find({
      id: problemId,
    });
  }

  // * id array를 받아 해당하는것 리턴
  getWrongProblems(problemIds: number[]) {
    return this.problems.find({
      where: {
        id: In(problemIds),
      },
    });
  }

  // TODO : isTheory도 query로 받아서 통합하기
  // TODO : problemNumber도 query로 받아서 통합하기
  // ! 통합범위
  // * problemNumber가 0인 이론
  async getHeaderTheory(language: string) {
    const problems = await this.problems.find({
      where: {
        language,
        isTheory: true,
        problemNumber: 0,
      },
    });

    const categoryWithNum = problems.map((p) => {
      return { category: p.category };
    });

    return categoryWithNum;
  }

  async getTheoryDetail(category: string, language: string) {
    const problems = await this.problems.find({
      where: {
        language,
        problemNumber: Not(0),
        isTheory: true,
        category,
      },
    });

    const problemsInfo = problems.map((p) => {
      return { id: p.id, problemNumber: p.problemNumber, category: p.category };
    });

    return problemsInfo;
  }

  // * problemNumber가 0인 문제
  async getHeaderProblem(language: string) {
    const problems = await this.problems.find({
      where: {
        language,
        isTheory: false,
        problemNumber: 0,
      },
    });

    const categoryWithNum = problems.map((p) => {
      return { category: p.category };
    });

    return categoryWithNum;
  }

  async getQuestionDetail(category: string, language: string) {
    const problems = await this.problems.find({
      where: {
        language,
        problemNumber: Not(0),
        isTheory: false,
        category,
      },
    });

    const problemsInfo = problems.map((p) => {
      return { id: p.id, problemNumber: p.problemNumber, category: p.category };
    });

    return problemsInfo;
  }
  // ! 통합범위

  // * 문제 갯수
  async getProbelmCount(language: string): Promise<number> {
    return this.problems.count({
      language,
      problemNumber: Not(0),
    });
  }

  // * 문제 삭제
  async removeOne(problemId: number): Promise<boolean> {
    await this.problems.delete(problemId);
    return true;
  }

  // * 문제 생성
  create(createProblemDto: CreateProblemDto): Promise<Problem> {
    const newProblem = this.problems.create(createProblemDto);

    return this.problems.save(newProblem);
  }
}
