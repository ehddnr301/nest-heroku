import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePageDto } from './dtos/create-page.dto';
import { PageService } from './page.service';

@Controller('page')
export class PageController {
  constructor(readonly pageService: PageService) {}

  @Get('all')
  getall() {
    return this.pageService.getAll();
  }

  // * 단일 페이지 컨텐츠
  @Get('/getOne/:id')
  getOne(@Param('id') pageId: number) {
    try {
      return this.pageService.getOne(pageId);
    } catch (e) {
      return e;
    }
  }

  //   * 생성
  // @Post('create')
  // async create(@Body() createPageDto: CreatePageDto): Promise<boolean> {
  //   try {
  //     await this.pageService.create(createPageDto);
  //     return true;
  //   } catch (e) {
  //     return e;
  //   }
  // }

  //   * 컨텐츠 가져오기
  @Get('contents')
  getPageContent(@Query('isBook') isBook: boolean) {
    try {
      return this.pageService.getContents(isBook);
    } catch (e) {
      return e;
    }
  }

  // @Delete('remove/:id')
  // removeOne(@Param('id') pageId: number): boolean {
  //   try {
  //     this.pageService.removeOne(pageId);
  //     return true;
  //   } catch {
  //     return false;
  //   }
  // }
}
