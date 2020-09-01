import { TestBed } from '@angular/core/testing';

import { ZrenderServiceService } from './zrender-service.service';

describe('ZrenderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZrenderServiceService = TestBed.get(ZrenderServiceService);
    expect(service).toBeTruthy();
  });
});
