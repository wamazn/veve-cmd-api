import { Module } from '@nestjs/common';
import { VeveQryApiController } from './veve-qry-api.controller';
import { VeveQryApiService } from './veve-qry-api.service';

@Module({
  imports: [],
  controllers: [VeveQryApiController],
  providers: [VeveQryApiService],
})
export class VeveQryApiModule {}
