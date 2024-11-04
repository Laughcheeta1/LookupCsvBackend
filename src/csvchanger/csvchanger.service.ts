import { Injectable } from '@nestjs/common';
import { CreateCsvchangerDto } from './dto/create-csvchanger.dto';
import { Readable } from 'stream';
const csvParser = require('csv-parser');

@Injectable()
export class CsvchangerService {
  parseCsv(buffer: Buffer): Promise<CreateCsvchangerDto[]> {
    return new Promise((resolve, reject) => {
      const results: CreateCsvchangerDto[] = [];

      const stream = Readable.from(buffer);

      stream.pipe(csvParser())
        .on('data', (data) => {
            results.push({
              name: data.name,
              price: data.price,
              gender: data.gender,
              category: data.category,
              subCategory: data.subCategory,
              brand: data.brand,
              sizes: data.sizes.split(','),
              colors: data.colors.split(','),
              code: data.code,
              imageUrl: data.imageUrl
            });
          }
        )
        .on('end', () => resolve(results))
        .on('error', (error) => reject(error));
    });
  }
}
