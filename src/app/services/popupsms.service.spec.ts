import { TestBed, inject } from '@angular/core/testing';

import { PopupsmsService } from './popupsms.service';

describe('PopupsmsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupsmsService]
    });
  });

  it('should be created', inject([PopupsmsService], (service: PopupsmsService) => {
    expect(service).toBeTruthy();
  }));
});
