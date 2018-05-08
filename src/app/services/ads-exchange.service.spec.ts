import { TestBed, inject } from '@angular/core/testing';

import { AdsExchangeService } from './ads-exchange.service';

describe('AdsExchangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdsExchangeService]
    });
  });

  it('should be created', inject([AdsExchangeService], (service: AdsExchangeService) => {
    expect(service).toBeTruthy();
  }));
});
