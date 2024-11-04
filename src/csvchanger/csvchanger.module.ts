import { Module } from '@nestjs/common';
import { CsvchangerService } from './csvchanger.service';
import { CsvchangerController } from './csvchanger.controller';

@Module({
  controllers: [CsvchangerController],
  providers: [CsvchangerService],
})
export class CsvchangerModule {}
