import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePageDto } from './dtos/create-page.dto';
import { Page } from './entities/page.entity';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(Page)
    private readonly pages: Repository<Page>,
  ) {}

  async getAll(): Promise<Page[]> {
    return this.pages.find();
  }

  // * id로 문제 리턴
  getOne(pageId) {
    return this.pages.find({
      id: pageId,
    });
  }

  // * 페이지 생성
  create(createPageDto: CreatePageDto): Promise<Page> {
    const newPage = this.pages.create(createPageDto);

    return this.pages.save(newPage);
  }

  async getContents(isBook: boolean): Promise<Page[]> {
    const contents = await this.pages.find({
      where: {
        isBook,
      },
    });

    return contents;
  }

  async removeOne(pageId: number): Promise<boolean> {
    await this.pages.delete(pageId);
    return true;
  }
}
