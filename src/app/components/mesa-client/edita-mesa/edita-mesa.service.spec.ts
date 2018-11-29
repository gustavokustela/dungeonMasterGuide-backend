import { TestBed, inject } from '@angular/core/testing';

import { EditaMesaService } from './edita-mesa.service';

describe('EditaMesaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditaMesaService]
    });
  });

  it('should be created', inject([EditaMesaService], (service: EditaMesaService) => {
    expect(service).toBeTruthy();
  }));
});
