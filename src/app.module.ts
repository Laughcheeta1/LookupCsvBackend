import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvchangerModule } from './csvchanger/csvchanger.module';

@Module({
  imports: [CsvchangerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
