import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { Model } from './entities/model.entity';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private readonly models: Repository<Model>,
  ) {}

  getAll(): Promise<Model[]> {
    return this.models.find();
  }

  create(createUserDto: CreateUserDto): Promise<Model> {
    const newUser = this.models.create(createUserDto);
    return this.models.save(newUser);
  }
}
