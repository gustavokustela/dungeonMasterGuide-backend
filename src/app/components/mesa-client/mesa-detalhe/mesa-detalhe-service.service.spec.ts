import { TestBed, inject } from '@angular/core/testing';

import { MesaDetalheServiceService } from './mesa-detalhe-service.service';

describe('MesaDetalheServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MesaDetalheServiceService]
    });
  });

  it('should be created', inject([MesaDetalheServiceService], (service: MesaDetalheServiceService) => {
    expect(service).toBeTruthy();
  }));
});
