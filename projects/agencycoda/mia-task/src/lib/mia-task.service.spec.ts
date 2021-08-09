import { TestBed } from '@angular/core/testing';

import { MiaTaskService } from './mia-task.service';

describe('MiaTaskService', () => {
  let service: MiaTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiaTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
