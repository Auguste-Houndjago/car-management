import { add } from '@car-management/sample-lib';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My Auguste!' + add(500, 5);
  }
}
