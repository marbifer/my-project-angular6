import { TestBed, inject } from '@angular/core/testing';

import { ServicesReferencesService } from './services-references.service';

describe('ServicesReferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesReferencesService]
    });
  });

  it('should be created', inject([ServicesReferencesService], (service: ServicesReferencesService) => {
    expect(service).toBeTruthy();
  }));
});
