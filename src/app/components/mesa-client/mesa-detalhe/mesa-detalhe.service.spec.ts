import { TestBed, inject } from '@angular/core/testing';

import { MesaDetalheService } from './mesa-detalhe.service';

describe('MesaDetalheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesaDetalheService]
    });
  });

  it('should be created', inject([MesaDetalheService], (service: MesaDetalheService) => {
    expect(service).toBeTruthy();
  }));
});
