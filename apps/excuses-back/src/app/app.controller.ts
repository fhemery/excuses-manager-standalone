import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller('excuse')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':nb')
  getData(@Param('nb') nb: number) {
    return this.appService.getExcuses(nb);
  }
}
