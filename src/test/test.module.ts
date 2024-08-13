import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { TestSchema } from './schemas/test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Test', schema: TestSchema }]),
  ],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
