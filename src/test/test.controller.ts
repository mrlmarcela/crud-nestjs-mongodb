import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { TestService } from './test.service';
import { Test } from './test';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  async getAll(): Promise<Test[]> {
    return this.testService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Test> {
    return this.testService.getById(id);
  }

  @Post()
  async create(@Body() test: Test): Promise<Test> {
    return this.testService.create(test);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() test: Test): Promise<Test> {
    return this.testService.update(id, test);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.testService.delete(id);
  }
}
