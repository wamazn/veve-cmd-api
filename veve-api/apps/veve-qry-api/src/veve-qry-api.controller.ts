import { Controller, Get } from '@nestjs/common';
import { VeveQryApiService } from './veve-qry-api.service';

@Controller()
export class VeveQryApiController {
  constructor(private readonly veveQryApiService: VeveQryApiService) {}

  @Get()
  getHello(): string {
    return this.veveQryApiService.getHello();
  }
}
