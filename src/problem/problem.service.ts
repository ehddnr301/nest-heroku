import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Problem } from './entities/problem.entity';

@Injectable()
export class ProblemService {
  constructor(
    @InjectRepository(Problem)
    private readonly problem: Repository<Problem>,
  ) {}

  getAll(): Promise<Problem[]> {
    return this.problem.find();
  }
}
