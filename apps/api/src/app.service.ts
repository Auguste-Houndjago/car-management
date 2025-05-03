import { Injectable } from '@nestjs/common';
import { add } from 'dist/libs/sample-lib';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My Auguste!' + add(500, 5);
  }
}
