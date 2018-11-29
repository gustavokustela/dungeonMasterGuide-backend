import { TestBed, inject } from '@angular/core/testing';

import { DeletaMesaService } from './deleta-mesa.service';

describe('DeletaMesaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeletaMesaService]
    });
  });

  it('should be created', inject([DeletaMesaService], (service: DeletaMesaService) => {
    expect(service).toBeTruthy();
  }));
});
