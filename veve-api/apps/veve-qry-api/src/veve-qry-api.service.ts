import { Injectable } from '@nestjs/common';

@Injectable()
export class VeveQryApiService {
  getHello(): string {
    return 'Hello World!';
  }
}
