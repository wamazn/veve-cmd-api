import { Test, TestingModule } from '@nestjs/testing';
import { VeveQryApiController } from './veve-qry-api.controller';
import { VeveQryApiService } from './veve-qry-api.service';

describe('VeveQryApiController', () => {
  let veveQryApiController: VeveQryApiController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VeveQryApiController],
      providers: [VeveQryApiService],
    }).compile();

    veveQryApiController = app.get<VeveQryApiController>(VeveQryApiController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(veveQryApiController.getHello()).toBe('Hello World!');
    });
  });
});
