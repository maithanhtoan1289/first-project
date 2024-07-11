import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'chương tcrình đầu tiên nestjs!aaaaaaaaaaaa';
  }
}
