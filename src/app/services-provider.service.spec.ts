import { TestBed, inject } from '@angular/core/testing';

import { ServicesProviderService } from './services-provider.service';

describe('ServicesProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesProviderService]
    });
  });

  it('should ...', inject([ServicesProviderService], (service: ServicesProviderService) => {
    expect(service).toBeTruthy();
  }));
});
