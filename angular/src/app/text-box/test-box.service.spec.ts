import { TestBed } from '@angular/core/testing';

import { TestBoxService } from './test-box.service';

describe('TestBoxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestBoxService = TestBed.get(TestBoxService);
    expect(service).toBeTruthy();
  });
});
