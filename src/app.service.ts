import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "<h1><a href='http://localhost:3100/api'>Go to API's</a></h1>";
  }
}
