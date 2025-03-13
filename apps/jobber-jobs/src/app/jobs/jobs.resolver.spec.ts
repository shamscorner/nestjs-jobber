import { Test, TestingModule } from '@nestjs/testing';
import { JobsResolver } from './jobs.resolver';
import { JobsService } from './jobs.service';
import { AUTH_PACKAGE_NAME } from 'types/proto/auth';

describe('JobsResolver', () => {
  let resolver: JobsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JobsResolver,
        {
          provide: JobsService,
          useValue: {},
        },
        {
          provide: `${AUTH_PACKAGE_NAME}`,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<JobsResolver>(JobsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
