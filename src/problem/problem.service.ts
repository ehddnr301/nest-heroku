import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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

  getOne(problemId) {
    return this.problems.find({
      id: problemId,
    });
  }

  async getHeaderTheory(language: string) {
    const problems = await this.problems.find({
      where: {
        language,
        isTheory: true,
        problemNumber: 0,
      },
    });

    const categoryWithNum = problems.map((p) => {
      return { id: p.id, problemNumber: p.problemNumber, category: p.category };
    });

    return categoryWithNum;
  }

  async getHeaderProblem(language: string) {
    const problems = await this.problems.find({
      where: {
        language,
        isTheory: false,
        problemNumber: 0,
      },
    });

    const categoryWithNum = problems.map((p) => {
      return [p.id, p.problemNumber, p.category];
    });

    return categoryWithNum;
  }

  // * 문제 삭제
  async removeOne(problemId: number): Promise<boolean> {
    await this.problems.delete(problemId);
    return true;
  }

  create(createProblemDto: CreateProblemDto): Promise<Problem> {
    const newProblem = this.problems.create(createProblemDto);

    return this.problems.save(newProblem);
  }
}
