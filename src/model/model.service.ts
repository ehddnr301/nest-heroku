import { Injectable } from '@nestjs/common';

@Injectable()
export class ModelService {
  getAll() {
    return process.env.DB_USERNAME;
  }
}
