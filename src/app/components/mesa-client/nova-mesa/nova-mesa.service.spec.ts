import { TestBed, inject } from '@angular/core/testing';

import { NovaMesaService } from './nova-mesa.service';

describe('NovaMesaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NovaMesaService]
    });
  });

  it('should be created', inject([NovaMesaService], (service: NovaMesaService) => {
    expect(service).toBeTruthy();
  }));
});
