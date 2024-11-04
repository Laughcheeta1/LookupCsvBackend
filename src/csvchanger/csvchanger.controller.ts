import { Controller, Post, UseInterceptors, UploadedFile } from '@nestjs/common';
import { CsvchangerService } from './csvchanger.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateCsvchangerDto } from './dto/create-csvchanger.dto';
import axios from 'axios';
import { ITEM_MICROSERVICE } from 'src/config/env.config';

@Controller('csvchanger')
export class CsvchangerController {
  constructor(private readonly csvchangerService: CsvchangerService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    const results: CreateCsvchangerDto[] = await this.csvchangerService.parseCsv(file.buffer);

    results.forEach(async (entry) => {
      try {
        await axios.post(`${ITEM_MICROSERVICE}/item`, entry);
      } catch (error) {
        console.error('Error sending data to microservice:', error);
        throw error;
      }
    });
  }
}
