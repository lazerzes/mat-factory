import { TestBed } from '@angular/core/testing';

import { MatFactoryService } from './mat-factory.service';

describe('MatFactoryService', () => {
  let service: MatFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
