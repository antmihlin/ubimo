import { TestBed, inject } from '@angular/core/testing';

import { UbimoAdDispatcherService } from './ubimo-ad-dispatcher.service';

describe('UbimoAdDispatcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UbimoAdDispatcherService]
    });
  });

  it('should be created', inject([UbimoAdDispatcherService], (service: UbimoAdDispatcherService) => {
    expect(service).toBeTruthy();
  }));
});
