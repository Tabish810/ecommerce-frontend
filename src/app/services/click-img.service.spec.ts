import { TestBed, inject } from '@angular/core/testing';

import { ClickImgService } from './click-img.service';

describe('ClickImgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClickImgService]
    });
  });

  it('should be created', inject([ClickImgService], (service: ClickImgService) => {
    expect(service).toBeTruthy();
  }));
});
