import { Test, TestingModule } from '@nestjs/testing';
import { JobsService } from './jobs.service';
import { DiscoveryService } from '@golevelup/nestjs-discovery';

describe('JobsService', () => {
  let service: JobsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobsService,
        {
          provide: DiscoveryService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<JobsService>(JobsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
