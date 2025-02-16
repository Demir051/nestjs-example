import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  create(body?: any): string {
    return `Successfully created a new entity with the following data: ${JSON.stringify(body)}`;
  }
}
